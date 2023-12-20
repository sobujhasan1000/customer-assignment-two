import express from 'express';
import { customerControlar } from './customer.controlar';

const router = express.Router();

router.post('/users', customerControlar.createCustomer);

router.get('/users', customerControlar.getAllcustomer);

router.get('/users/:userId', customerControlar.getSpecifiqcustomer);

router.delete('/users/:userId', customerControlar.deletSpecifiqcustomer);

router.put('/users/:userId', customerControlar.updateSpecifiqcustomer);

router.get(
  '/users/:userId/orders/total-price',
  customerControlar.totalSpecifiqcustomerOrderPrice,
);
router.get('/users/:userId/orders', customerControlar.getSpecifiqcustomerOrder);
router.put('/users/:userId/orders', customerControlar.addNewProductCustomer);

export const customerRoutes = router;
