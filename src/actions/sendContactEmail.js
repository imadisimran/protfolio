"use server";

import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import { ContactEmail } from "../emails/ContactEmail";

export async function sendContactEmail(data) {
  const { name, email, company, budget, message } = data;

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const emailHtml = await render(
      <ContactEmail
        name={name}
        email={email}
        company={company}
        budget={budget}
        message={message}
      />
    );

    const options = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: `New Contact Inquiry from ${name}`,
      html: emailHtml,
    };

    await transporter.sendMail(options);

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return { success: false, error: "Failed to send email. Please try again later." };
  }
}
