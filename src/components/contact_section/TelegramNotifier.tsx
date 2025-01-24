import React, { useState } from "react";
import { BOT_TOKEN, CHANNEL_ID } from "../../lib/constants";
import { useTranslation } from "react-i18next";

const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
interface SubmitButtonProps {
  buttonState: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ buttonState }) => {
  const { t } = useTranslation();
  const isDisabled = buttonState !== t("contact.submitButton.submit");
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={`transition-smooth rounded-md px-4 py-2 text-white ${
        buttonState === t("contact.submitButton.submit")
          ? "bg-primary hover:bg-secondary"
          : "cursor-not-allowed bg-gray-500"
      }`}
      aria-busy={isDisabled}
    >
      {buttonState}
    </button>
  );
};

const TelegramNotifier: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    message: "",
    name: "",
    buttonState: t("contact.submitButton.submit"),
    humanVerification: "",
    captchaError: false,
  });

  const [captcha, setCaptcha] = useState({
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10),
  });

  const correctAnswer = captcha.num1 + captcha.num2;

  const updateFormState = (
    field: keyof typeof formState,
    value: string | boolean,
  ) => setFormState((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!formState.message.trim()) {
      updateFormState("buttonState", t("contact.submitButton.submit"));
      return;
    }
    if (parseInt(formState.humanVerification) !== correctAnswer) {
      updateFormState("captchaError", true);
      updateFormState("buttonState", t("contact.submitButton.submit"));
      return;
    }
    updateFormState("captchaError", false);
    updateFormState("buttonState", t("contact.submitButton.sending"));
    try {
      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHANNEL_ID,
          text: `name:${formState.name}; message:${formState.message}`,
        }),
      });
      if (response.ok) {
        setFormState((prev) => ({
          ...prev,
          message: "",
          name: "",
          humanVerification: "",
          buttonState: t("contact.submitButton.submitted"),
        }));
        setCaptcha({
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
        });
        setTimeout(
          () =>
            updateFormState("buttonState", t("contact.submitButton.submit")),
          3000,
        );
      } else {
        const errorData = await response.json();
        console.error(
          `${t("contact.error.responseError")} ${errorData.description}`,
        );
        updateFormState("buttonState", t("contact.submitButton.submit"));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
      } else {
        console.error(t("contact.error.fetchError"));
      }
      updateFormState("buttonState", t("contact.submitButton.submit"));
    }
  };

  return (
    <form
      className="shadow-m flex w-full flex-col gap-4 rounded-md bg-dark-bg/20 p-6 text-sm font-light text-light-gray"
      onSubmit={handleSubmit}
    >
      <input
        autoComplete="off"
        type="text"
        name="name"
        id="name"
        required
        placeholder={t("contact.form.namePlaceholder")}
        value={formState.name}
        onChange={(e) => updateFormState("name", e.target.value)}
        className="w-full rounded-md border border-primary bg-transparent p-3 outline-none placeholder:text-light-gray focus:border-secondary focus:bg-dark-bg focus:ring-secondary"
        aria-label="Name"
      />
      <textarea
        id="message"
        name="message"
        rows={6}
        required
        placeholder={t("contact.form.messagePlaceholder")}
        className="w-full rounded-md border border-primary bg-transparent p-3 outline-none placeholder:text-light-gray focus:border-secondary focus:bg-dark-bg focus:ring-secondary"
        value={formState.message}
        onChange={(e) => updateFormState("message", e.target.value)}
        aria-label="Message"
      />
      {formState.message && formState.name && (
        <div className="flex w-full flex-wrap items-center gap-2">
          <label htmlFor="captcha" className="text-light-gray">
            {t("contact.form.captchaQuestion")} {captcha.num1} + {captcha.num2}?
          </label>
          <input
            autoComplete="off"
            type="text"
            id="captcha"
            required
            placeholder={t("contact.form.captchaPlaceholder")}
            value={formState.humanVerification}
            onChange={(e) =>
              updateFormState("humanVerification", e.target.value)
            }
            className="flex-1 rounded-md border border-primary bg-transparent p-2 outline-none placeholder:text-light-gray focus:border-secondary focus:bg-dark-bg focus:ring-secondary"
            aria-label="Captcha"
          />
        </div>
      )}
      {formState.captchaError && (
        <p className="text-red-500">{t("contact.form.captchaError")}</p>
      )}
      <SubmitButton buttonState={formState.buttonState} />
    </form>
  );
};

export default TelegramNotifier;
