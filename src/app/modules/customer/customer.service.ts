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

const getSpecifiqCustomerOrder = async (id: string) => {
  const result = await customermodel.findOne({ id }).select('orders');
  return result;
};
const getSpecifiqCustomerTotalPrice = async (id: string) => {
  const orderdata = await customermodel.findOne({ id }).select('orders');
  const TotalPrice = orderdata?.orders?.reduce(
    (acc, order) => acc + order.price * order.quantity,
    0,
  );
  return TotalPrice;
};

export const customerServices = {
  createCustomerDB,
  getAllCustomerDB,
  getSpecifiqCustomerDB,
  deleteSpecifiqCustomerDB,
  updateSpecifiqCustomerDB,
  getSpecifiqCustomerOrder,
  getSpecifiqCustomerTotalPrice,
};
