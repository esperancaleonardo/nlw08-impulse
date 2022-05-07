import express from 'express';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma_feedbacks_repository';
import { SubmitFeedbackUseCase } from './use_cases/submitFeedback_uc';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer_mail_adapter';

export const routes = express.Router()




routes.post('/feedback', async (req, res) => {

  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter)

  await submitFeedbackUseCase.run(
    {
      type,
      comment,
      screenshot
    },
  )

  return res.status(201).send()
})


routes.get('/', (req, res) => {
  return res.send("Hello World!")
})