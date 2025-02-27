import { TFunction } from "i18next";
import createLoginSchema from "./schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Login } from "@/interfaces";

interface UseLoginFormProps {
  t: TFunction<"global", undefined>;
}

export default function useLoginForm(props: UseLoginFormProps) {
  const { t } = props;
  const loginSchema = createLoginSchema(t);

  const form = useForm<Login>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<Login> = (data) => console.log(data);

  return { form, onSubmit };
}
