import { useLoginPage } from "@/hooks";

export default function LoginPage() {
  const {
    form: {
      handleSubmit,
      register,
      formState: { errors },
    },
    onSubmit,
    t,
  } = useLoginPage();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{t("page.login.title")}</h1>
          <p className="py-6">{t("page.login.description")}</p>
        </div>
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
              <label className="fieldset-label">
                {t("field.password.title")}
              </label>
              <input
                type="password"
                className="input validator"
                placeholder={t("field.password.placeholder")}
                required
                {...register("password")}
              />
              <div className="validator-hint">{errors.password?.message}</div>
              <div>
                <a className="link link-hover">
                  {t("page.login.forgot_password")}
                </a>
              </div>
              <button className="btn btn-neutral mt-4">
                {t("page.login.button")}
              </button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
}
