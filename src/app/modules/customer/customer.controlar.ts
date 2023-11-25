import { Request, Response } from 'express';
import { customerServices } from './customer.service';

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

export const customerControlar = {
  createCustomer,
};
