import { Router } from 'express';
import { StatusCodes } from '../common';
import { checkPassword } from './repository';
import { Password } from './password';

const router = Router();

router.post('/', async (req, res) => {
  const userData = req.body as Password;
  try {
    await checkPassword(userData);
    return res.sendStatus(StatusCodes.Ok);
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

export default router;
