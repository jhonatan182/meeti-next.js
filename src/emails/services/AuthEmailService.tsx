import { render } from "@react-email/components";

import VerificationEmailText from "../templates/VerificationEmailText";
import VerificationEmail from "../templates/VerificationEmail";
import { VerificationEmailData } from "../types/email.types";
import { emailConfig } from "../config/config";
import { EmailService } from "./EmailService";

export class AuthEmailService {
  static async sendVerificationEmail(
    data: VerificationEmailData,
  ): Promise<void> {
    const htmlVerificationEmailText = await render(
      <VerificationEmailText {...data} />,
    );
    const htmlVerificationEmail = await render(<VerificationEmail {...data} />);

    await EmailService.send({
      from: emailConfig.from.verification,
      to: data.email,
      subject: "Confirma tu cuenta",
      text: htmlVerificationEmailText,
      html: htmlVerificationEmail,
    });
  }
}
