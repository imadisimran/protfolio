import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export const ContactEmail = ({
  name,
  email,
  company,
  budget,
  message,
}) => {
  const previewText = `New contact from ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans my-auto mx-auto px-2">
          <Container className="border border-solid border-gray-300 rounded-lg my-[40px] mx-auto p-[20px] max-w-[600px] bg-white">
            <Section className="mt-[20px]">
              <Heading className="text-black text-[24px] font-bold text-center p-0 my-[30px] mx-0">
                New Contact Inquiry
              </Heading>
              <Text className="text-black text-[14px] leading-[24px]">
                You have received a new message from your portfolio contact form.
              </Text>
              
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              
              <Section>
                <Text className="text-black text-[14px] leading-[24px] font-semibold mb-1">
                  Contact Details:
                </Text>
                <Text className="text-black text-[14px] leading-[24px] mt-0 mb-1">
                  <strong>Name:</strong> {name}
                </Text>
                <Text className="text-black text-[14px] leading-[24px] mt-0 mb-1">
                  <strong>Email:</strong> {email}
                </Text>
                {company && (
                  <Text className="text-black text-[14px] leading-[24px] mt-0 mb-1">
                    <strong>Company:</strong> {company}
                  </Text>
                )}
                {budget && (
                  <Text className="text-black text-[14px] leading-[24px] mt-0 mb-1">
                    <strong>Budget:</strong> {budget}
                  </Text>
                )}
              </Section>
              
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              
              <Section>
                <Text className="text-black text-[14px] leading-[24px] font-semibold mb-1">
                  Message:
                </Text>
                <Text className="text-black text-[14px] leading-[24px] mt-0 p-4 bg-gray-50 rounded-md whitespace-pre-wrap">
                  {message}
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
