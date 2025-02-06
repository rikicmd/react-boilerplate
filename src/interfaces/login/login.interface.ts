import { SubmitHandler, UseFormReturn } from "react-hook-form";

export interface Login {
  email: string;
  password: string;
}

export interface LoginHook {
  form: UseFormReturn<Login, any, undefined>;
  onSubmit: SubmitHandler<Login>;
}
