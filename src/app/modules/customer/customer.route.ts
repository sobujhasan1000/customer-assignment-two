import express from 'express';
import { customerControlar } from './customer.controlar';

const router = express.Router();

router.post('/POST/api/users', customerControlar.createCustomer);

router.get('/GET/api/users', customerControlar.getAllcustomer);

router.get('/GET/api/users/:userId', customerControlar.getSpecifiqcustomer);

router.delete(
  '/DELETE/api/users/:userId',
  customerControlar.deletSpecifiqcustomer,
);
router.put('/PUT/api/users/:userId', customerControlar.updateSpecifiqcustomer);

export const customerRoutes = router;
