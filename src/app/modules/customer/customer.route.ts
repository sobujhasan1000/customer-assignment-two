import express from 'express';
import { customerControlar } from './customer.controlar';

const router = express.Router();

router.post('/api/users', customerControlar.createCustomer);

export const customerRoutes = router;
