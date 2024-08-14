import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const settingsRouter = express.Router();
const prisma = new PrismaClient();

settingsRouter.post("/init/email", async (req: Request, res: Response) => {
  try {
    const { email, password, smtpHostLink, smtpPort, imapHostLink, imapPort } = req.body;
    console.log('Email:', email);

    const newEmailAccount = await prisma.emailAccount.create({
      data: {
        emailaddr: email,
        password,
        smtpHost: smtpHostLink,
        smtpPort: parseInt(smtpPort, 10),  // Convert to integer
        imapHost: imapHostLink,
        imapPort: parseInt(imapPort, 10)  // Convert to integer
      }
    });

    if (!newEmailAccount) {
      throw new Error('Failed to save setup');
    }

    console.log('Success:', newEmailAccount);

    return res.status(200).json(newEmailAccount);

  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});



export default settingsRouter;