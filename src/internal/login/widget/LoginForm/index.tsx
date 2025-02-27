import { TFunction } from "i18next";
import useLoginForm from "./state";

interface LoginFormProps {
  t: TFunction<"global", undefined>;
}

export default function LoginForm(props: LoginFormProps) {
  const { t } = props;

  const {
    form: {
      handleSubmit,
      register,
      formState: { errors },
    },
    onSubmit,
  } = useLoginForm({ t });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
    >
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">{t("field.email.title")}</label>
          <input
            type="email"
            className="input validator"
            placeholder={t("field.email.placeholder")}
            required
            {...register("email")}
          />
          <div className="validator-hint">{errors.email?.message}</div>
          <label className="fieldset-label">{t("field.password.title")}</label>
          <input
            type="password"
            className="input validator"
            placeholder={t("field.password.placeholder")}
            required
            {...register("password")}
          />
          <div className="validator-hint">{errors.password?.message}</div>
          <div>
            <a className="link link-hover">{t("page.login.forgot_password")}</a>
          </div>
          <button className="btn btn-neutral mt-4">
            {t("page.login.button")}
          </button>
        </fieldset>
      </div>
    </form>
  );
}
