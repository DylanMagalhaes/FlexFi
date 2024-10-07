import { sessionRepository } from "@/repositories/sessionRepository";
import { useAuthStore } from "@/store/useAuthStore";

export const useLoginViewModel = () => {
  const { login } = sessionRepository();
  const {
    setEmail,
    setPublicKey,
    setSeedPhrase,
    setIsLogged,
    setSiren,
    setLegalCategory,
    setMainActivity,
    setDenomination,
  } = useAuthStore();

  const handleSubmit = async (email: string, password: string) => {
    try {
      await login(email, password, (authData) => {
        setEmail(authData.email);
        setPublicKey(authData.publicKey);
        setSeedPhrase(authData.seedPhrase);
        setIsLogged(authData.isLogged);
        setSiren(authData.siren);
        setLegalCategory(authData.legalCategory);
        setMainActivity(authData.mainActivity);
        setMainActivity(authData.mainActivity);
        setDenomination(authData.denomination);
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return { handleSubmit };
};
