import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export async function POST(req: Request) {
  try {
    // 1. Updated to match the frontend (only extract what you need for this email)
    const { name, email } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.co.uk",
      port: 587,
      secure: false, 
     auth: {
        user: "info@sultan-apparels.com",
        pass: "Zayan@2020",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const templatePath = path.join(
      process.cwd(),
      "static/email_template/contact_user_template.ejs"
    );
    
    // 2. Pass 'name' instead of 'fullName'
    const html = await ejs.renderFile(templatePath, {
      name,
      email,
    });

    const mailOptions = {
      from: `"Sultan Apparels" <info@sultan-apparels.com>`, 
      to: email,
      subject: `Thank You for Contacting Sultan Apparels`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}