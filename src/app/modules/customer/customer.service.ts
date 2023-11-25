import { customermodel } from '../customer.model';
import { customer } from './customer.interface';

const createCustomerDB = async (customer: customer) => {
  const result = await customermodel.create(customer);
  return result;
};

const getAllCustomerDB = async () => {
  const result = await customermodel.find();
  return result;
};
const getSpecifiqCustomerDB = async (id: string) => {
  const result = await customermodel.findOne({ id });
  return result;
};
const updateSpecifiqCustomerDB = async (id: string) => {
  const result = await customermodel.updateOne({ id });
  return result;
};
const deleteSpecifiqCustomerDB = async (id: string) => {
  const result = await customermodel.deleteOne({ id });
  return result;
};

export const customerServices = {
  createCustomerDB,
  getAllCustomerDB,
  getSpecifiqCustomerDB,
  deleteSpecifiqCustomerDB,
  updateSpecifiqCustomerDB,
};
