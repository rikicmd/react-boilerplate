import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Login, LoginHook } from "@/interfaces";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

const createSchema = (t: TFunction<"global", undefined>) => {
  return yup.object({
    email: yup
      .string()
      .email(t("field.email.validation.email"))
      .required(t("field.email.validation.required"))
      .min(1),
    password: yup.string().required(t("field.password.validation.required")),
  });
};

export default function useLoginPage(): LoginHook {
  const { t } = useTranslation("global");
  const schema = createSchema(t);

  const form = useForm<Login>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Login> = (data) => console.log(data);
  return { form, onSubmit, t };
}
