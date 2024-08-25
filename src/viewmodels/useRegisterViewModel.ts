import { useState } from "react";

export const useRegisterViewModel = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [acceptPrivacy, setAcceptPrivacy] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const URL_API = "http://localhost:3000";

  interface ApiResponse {
    error?: string;
    message?: string;
  }

  const handleApiCall = async (url: string, method: string, body: any): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      setLoading(false);

      if (!response.ok) {
        const errorData: ApiResponse = await response.json();
        throw new Error(errorData.error || "Une erreur est survenue");
      }

      return await response.json();
    } catch (error: any) {
      setLoading(false);

      if (error.message.includes("This email is already registered.")) {
        setError("This email is already registered.");
      } else {
        setError(error.message || "Une erreur est survenue");
      }

      console.error("API call error:", error);
      throw error;
    }
  };

  const sendConfirmationEmail = async (email: string): Promise<void> => {
    try {
      await handleApiCall(`${URL_API}/send-verification-email`, "POST", { email });
      console.log("Email envoyé avec succès");
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      throw error;
    }
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!acceptPrivacy) {
      alert("Vous devez accepter la politique de confidentialité pour vous inscrire.");
      return;
    }

    try {
      await sendConfirmationEmail(email);
      setCurrentStep(2); // Passe à l'étape suivante seulement si l'envoi de l'email réussit
    } catch (error) {
      console.error("Erreur capturée dans handleSubmitEmail:", error);
      // Si une erreur est levée, l'étape ne changera pas et l'utilisateur verra le message d'erreur.
    }
  };

  const handleSubmitCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await handleApiCall(`${URL_API}/verify-email`, "POST", { email, code: confirmationCode });
      setCurrentStep(3);
    } catch (error) {
      setError("The confirmation code is incorrect or has expired.");
    }
  };

  const handleSubmitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("The passwords do not match.");
      return;
    }
    try {
      await handleApiCall(`${URL_API}/register`, "POST", { email, password });
      setCurrentStep(4); // Redirect to login or show success message
    } catch (error: any) {
      // Vérifiez si l'erreur contient une réponse du backend
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message); // Utilise le message du backend
      } else {
        setError("Erreur lors de la création du compte. Veuillez réessayer.");
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    acceptPrivacy,
    setAcceptPrivacy,
    confirmationCode,
    setConfirmationCode,
    currentStep,
    loading,
    error,
    handleSubmitEmail,
    handleSubmitCode,
    handleSubmitPassword,
  };
};