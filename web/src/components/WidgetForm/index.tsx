import { CloseButton } from "../CloseButton";
import { FbTypeStep } from "./steps/FbTypeStep";
import { FbContentStep } from "./steps/FbContentStep";
import { FbSuccessStep } from "./steps/FbSuccessStep";

import { useState } from "react";

import bugImage from "../../assets/bug.svg";
import ideaImage from "../../assets/idea.svg";
import thoughtImage from "../../assets/thought.svg";
import { Footer } from "../Footer";

export const FeedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImage,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImage,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImage,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof FeedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FbSuccessStep onFeedbackRestart={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FbTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FbContentStep
              feedbackType={feedbackType}
              onFeedbackRestart={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <Footer />
    </div>
  );
}
