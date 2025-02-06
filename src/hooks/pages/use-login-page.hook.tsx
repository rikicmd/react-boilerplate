import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Login, LoginHook } from "@/interfaces";

const schema = yup.object({
  email: yup.string().email("Format email tidak sesuai").required().min(1),
  password: yup.string().required(),
});

export default function useLoginPage(): LoginHook {
  const form = useForm<Login>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Login> = (data) => console.log(data);
  return { form, onSubmit };
}
