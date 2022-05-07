import { FeedbacksRepository } from "../repositories/feedbacks_repository";
import { MailAdapter } from "../adapters/mail_adapter";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) {}

    async run(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Formato Inválido de Screenshot!')
        }

        if (!type || !comment) {
            throw new Error('Tipo e comentário não podem ser vazios...')
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                '<div>',
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário ${comment}</p>`, '</div>'].join('\n')
        })
    }
}