import express from 'express'; 
const router = express.Router();

import { RegisterUser, LoginUser } from '../Controllers/userController.js';

router.post('/api/user/registration', RegisterUser);
router.post('/api/user/login', LoginUser);

export default router;
