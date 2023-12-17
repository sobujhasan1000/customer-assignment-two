import express from 'express';
import { customerControlar } from './customer.controlar';

const router = express.Router();

router.post('/api/users', customerControlar.createCustomer);

router.get('/api/users', customerControlar.getAllcustomer);

router.get('/api/users/:userId', customerControlar.getSpecifiqcustomer);

router.delete('/api/users/:userId', customerControlar.deletSpecifiqcustomer);

router.put('/api/users/:userId', customerControlar.updateSpecifiqcustomer);

router.get(
  '/api/users/:userId/orders/total-price',
  customerControlar.totalSpecifiqcustomerOrderPrice,
);
router.get(
  '/api/users/:userId/order',
  customerControlar.getSpecifiqcustomerOrder,
);

export const customerRoutes = router;
