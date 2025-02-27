import { useTranslation } from "react-i18next";

export default function useLoginScreen() {
  const { t } = useTranslation("global");
  return { t };
}
