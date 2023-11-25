import { Request, Response } from 'express';
import { customerServices } from './customer.service';

// create a new customer
const createCustomer = async (req: Request, res: Response) => {
  try {
    const customerdata = req.body;

    const result = await customerServices.createCustomerDB(customerdata);

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

export const customerControlar = {
  createCustomer,
  getAllcustomer,
  getSpecifiqcustomer,
  deletSpecifiqcustomer,
  updateSpecifiqcustomer,
};
