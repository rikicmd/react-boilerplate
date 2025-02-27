import { TFunction } from "i18next";
import * as yup from "yup";

export default function createLoginSchema(t: TFunction<"global", undefined>) {
  return yup.object({
    email: yup
      .string()
      .email(t("field.email.validation.email"))
      .required(t("field.email.validation.required"))
      .min(1),
    password: yup.string().required(t("field.password.validation.required")),
  });
}
