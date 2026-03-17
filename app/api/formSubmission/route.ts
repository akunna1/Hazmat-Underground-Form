import { supabaseServer } from '../../lib/supabaseServer'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

export async function POST(req: Request) {
  try {
    // 1. Taking the inputs as data from the request body
    const data = await req.json()

    // 2. Processing the inputs (Create PDF, add data, upload, send email notification)

    // Creating a new PDF
    const pdfDoc = await PDFDocument.create()
    let page = pdfDoc.addPage([612, 792]) // standard letter size
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

    let y = 750

    const maxWidth = 500
    const leftMargin = 50

    // Helper: Auto page break
    const checkPageBreak = () => {
      if (y < 80) {
        page = pdfDoc.addPage([612, 792])
        y = 750
      }
    }

    // Helper: Drawing a line with automatic wrapping
    const drawLine = (label: string, value: string) => {
      const text = `${label}: ${value || ''}`
      const words = text.split(' ')
      let line = ''

      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' '
        const width = font.widthOfTextAtSize(testLine, 12)

        if (width > maxWidth && i > 0) {
          checkPageBreak()

          page.drawText(line.trim(), {
            x: leftMargin,
            y,
            size: 12,
            font,
            color: rgb(0, 0, 0)
          })

          y -= 18
          line = words[i] + ' '
        } else {
          line = testLine
        }
      }

      checkPageBreak()

      page.drawText(line.trim(), {
        x: leftMargin,
        y,
        size: 12,
        font,
        color: rgb(0, 0, 0)
      })

      y -= 20
    }

    // Helper: Drawing a section subtitle
    const drawSubtitle = (title: string) => {
      checkPageBreak()
      page.drawText(title, {
        x: leftMargin,
        y,
        size: 14,
        font: boldFont,
        color: rgb(0, 0, 0)
      })
      y -= 25
    }

    // Form Title
    page.drawText('HAZMAT UNDERGROUND INCIDENT FORM', {
      x: leftMargin,
      y,
      size: 16,
      font,
      color: rgb(0, 0, 0)
    })
    y -= 30


    // Master Contractor
    drawSubtitle('Master Contractor')
    drawLine('Company Name', data.masterCompanyName)
    drawLine('Phone', data.masterCompanyPhone)
    drawLine('Email', data.masterCompanyEmail)
    drawLine('Website', data.masterCompanyWebsite)
    drawLine('Street', data.masterCompanyStreet)
    drawLine('City', data.masterCompanyCity)
    drawLine('State', data.masterCompanyState)
    drawLine('Zip', data.masterCompanyZip)
    drawLine('Insurance Company', data.masterInsuranceCompany)
    drawLine('Insurance Policy', data.masterInsurancePolicy)
    drawLine('Client Company', data.masterClient)

    y -= 20

  
    // Master Contractor Point of Contact
    drawSubtitle('Master Contractor Point of Contact')
    drawLine('Name', data.masterContactName)
    drawLine('Position', data.masterContactPosition)
    drawLine('Phone', data.masterContactPhone)
    drawLine('Email', data.masterContactEmail)

    y -= 20

  
    // Master Contractor Supervisor
    drawSubtitle('Master Contractor Supervisor')
    drawLine('Name', data.masterSupervisorName)
    drawLine('Position', data.masterSupervisorPosition)
    drawLine('Phone', data.masterSupervisorPhone)
    drawLine('Email', data.masterSupervisorEmail)

    y -= 20

  
    // Sub-Contractor
    drawSubtitle('Sub-Contractor')
    drawLine('Company Name', data.subCompanyName)
    drawLine('Phone', data.subCompanyPhone)
    drawLine('Email', data.subCompanyEmail)
    drawLine('Website', data.subCompanyWebsite)
    drawLine('Street', data.subCompanyStreet)
    drawLine('City', data.subCompanyCity)
    drawLine('State', data.subCompanyState)
    drawLine('Zip', data.subCompanyZip)
    drawLine('Insurance Company', data.subInsuranceCompany)
    drawLine('Insurance Policy', data.subInsurancePolicy)
    drawLine('Permit Number', data.permitNumber)
    drawLine('Permit Issuing Agency', data.permitIssuingAgency)

    y -= 20

  
    // Sub-Contractor Point of Contact on Scene
    drawSubtitle('Sub-Contractor Point of Contact on Scene')
    drawLine('Name', data.subContactName)
    drawLine('Position', data.subContactPosition)
    drawLine('Phone', data.subContactPhone)
    drawLine('Email', data.subContactEmail)

    y -= 20

  
    // Sub-Contractor Supervisor
    drawSubtitle('Sub-Contractor Supervisor')
    drawLine('Name', data.subSupervisorName)
    drawLine('Position', data.subSupervisorPosition)
    drawLine('Phone', data.subSupervisorPhone)
    drawLine('Email', data.subSupervisorEmail)

    // Converting PDF to bytes
    const pdfBytes = await pdfDoc.save()
    const buffer = Buffer.from(pdfBytes)

    // Creating a file name
    const safeName = (data.masterCompanyName || 'Unknown').replace(/\s+/g, '-')
    const fileName = `hazmat-underground-${safeName}-${Date.now()}.pdf`

    // Uploading to Supabase Storage
    const { error } = await supabaseServer.storage
      .from('form-pdfs')
      .upload(fileName, buffer, {
        contentType: 'application/pdf'
      })

    if (error) throw error

    // Getting public link
    const { data: publicUrlData } = supabaseServer.storage
      .from('form-pdfs')
      .getPublicUrl(fileName)

    const publicUrl = publicUrlData.publicUrl

    // Sending email notification
    const emailRes = await fetch(
      "https://zllpgqwytjlstygdnjvd.supabase.co/functions/v1/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`
        },
        body: JSON.stringify({
          to: "durhamfd.nc@gmail.com",
          subject: "HazMat Underground Incident Form",
          html: `
            <h2>HazMat Underground Incident Form Submission</h2>
            <p><strong>Master Contractor:</strong> ${data.masterCompanyName}</p>
            <p><strong>Client Company:</strong> ${data.masterClient}</p>
            <p><strong>Submitted On:</strong> ${new Date().toLocaleString()}</p>
            <p><a href="${publicUrl}">View PDF</a></p>
          `,
        }),
      }
    )

    // Checking if email was sent successfully
    if (!emailRes.ok) {
      const errorData = await emailRes.json()
      throw new Error(`Email send failed: ${errorData.error || emailRes.statusText}`)
    }

    // 3. Returning a response
    return Response.json({ success: true, fileName })

  } catch (err) {
    console.error(err)
    return new Response(
      JSON.stringify({ error: (err as any)?.message || 'Unknown error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}