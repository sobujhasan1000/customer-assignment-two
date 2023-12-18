import { Request, Response } from 'express';
import { customerServices } from './customer.service';
import customerValidationSchema from './customer.validation';

// create a new customer
const createCustomer = async (req: Request, res: Response) => {
  try {
    const customerdata = req.body;

    const customerParseZod = customerValidationSchema.parse(customerdata);

    const result = await customerServices.createCustomerDB(customerParseZod);

    res.status(200).json({
      success: true,
      message: 'customer create succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// get all customer
const getAllcustomer = async (req: Request, res: Response) => {
  try {
    const result = await customerServices.getAllCustomerDB();

    res.status(200).json({
      success: true,
      message: 'customer get succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// get specifiq customer
const getSpecifiqcustomer = async (req: Request, res: Response) => {
  try {
    const customerId = req.params.userId;
    const result = await customerServices.getSpecifiqCustomerDB(customerId);

    res.status(200).json({
      success: true,
      message: 'find specifiq customer succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// get all specifiq customer total order list
const getSpecifiqcustomerOrder = async (req: Request, res: Response) => {
  try {
    const customerId = req.params.userId;
    const result = await customerServices.getSpecifiqCustomerOrder(customerId);
    res.status(200).json({
      success: true,
      message: 'find specifiq customer orders succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// delete specifiq customer
const deletSpecifiqcustomer = async (req: Request, res: Response) => {
  try {
    const customerId = req.params.userId;
    const result = await customerServices.deleteSpecifiqCustomerDB(customerId);

    res.status(200).json({
      success: true,
      message: 'delete specifiq customer succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// update specifiq customer
const updateSpecifiqcustomer = async (req: Request, res: Response) => {
  try {
    const customerId = req.params.userId;

    const result = await customerServices.updateSpecifiqCustomerDB(customerId);

    res.status(200).json({
      success: true,
      message: 'update specifiq customer succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// TOTAL PRICE ORDER
const totalSpecifiqcustomerOrderPrice = async (req: Request, res: Response) => {
  try {
    const customerId = req.params.userId;

    const result =
      await customerServices.getSpecifiqCustomerTotalPrice(customerId);

    res.status(200).json({
      success: true,
      message: 'Total price specifiq customer succesfully',
      totalPrice: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const customerControlar = {
  createCustomer,
  getAllcustomer,
  getSpecifiqcustomer,
  deletSpecifiqcustomer,
  updateSpecifiqcustomer,
  getSpecifiqcustomerOrder,
  totalSpecifiqcustomerOrderPrice,
};
