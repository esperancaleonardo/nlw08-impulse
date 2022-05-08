import { CloseButton } from "../../CloseButton";
import { ScreenShotButton } from "../../ScreenShotButton";
import { Loading } from "../../Loading";
import { FeedbackType, FeedbackTypes } from "..";
import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../../../lib/api";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestart: () => void;
  onFeedbackSent: () => void;
}

export function FbContentStep({
  feedbackType,
  onFeedbackRestart,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = FeedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<String | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setisSendingFeedback] = useState(false);

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setisSendingFeedback(true);

    await api.post("/feedback", {
      type: feedbackType,
      comment,
      screenshot,
    });

    onFeedbackSent();
    setisSendingFeedback(false);
  }

  return (
    <>
      <header>
        <button
          type="button"
          className=" absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestart}
        >
          <ArrowLeft weight="bold" className="h-4 w-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}:
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o motivo de você estar aqui..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenShotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length == 0 || isSendingFeedback}
            className="disabled:opacity-50 disabled:hover:bg-brand-500 p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          >
            {isSendingFeedback ? <Loading /> : "Enviar Meu Feedback!"}
          </button>
        </footer>
      </form>
    </>
  );
}
