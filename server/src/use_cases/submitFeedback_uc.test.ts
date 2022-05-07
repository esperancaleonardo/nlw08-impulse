import { SubmitFeedbackUseCase } from "./submitFeedback_uc";

const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => { } },
            { sendMail: async () => {} }
        )


describe('Submit Feedback', () => {
    it('should be able to submit a feedback', () => {

        expect(submitFeedback.run({
            type: 'BUG',
            comment: 'this is an example comment',
            screenshot: 'data:image/png;base64,sdasdadar34ad'
        })).resolves.not.toThrow();
    });

    it('should not be able to submit feedback without type or comment', () => {

        expect(submitFeedback.run({
            type: '',
            comment: 'this is an example comment',
            screenshot: 'data:image/png;base64,sdasdadar34ad'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without type or comment', () => {

        expect(submitFeedback.run({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,sdasdadar34ad'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback with wrong/invalid screenshot', () => {

        expect(submitFeedback.run({
            type: 'BUG',
            comment: 'teste de comentário',
            screenshot: 'imageScreenshot.png'
        })).rejects.toThrow();
    });

    

});


