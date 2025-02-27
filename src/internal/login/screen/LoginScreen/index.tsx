import LoginForm from "../../widget/LoginForm";
import useLoginScreen from "./state";

export default function LoginScreen() {
  const { t } = useLoginScreen();
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{t("page.login.title")}</h1>
          <p className="py-6">{t("page.login.description")}</p>
        </div>
        <LoginForm t={t} />
      </div>
    </div>
  );
}
