import { customermodel } from '../customer.model';
import { customer } from './customer.interface';

const createCustomerDB = async (customer: customer) => {
  const result = await customermodel.create(customer);
  return result;
};

export const customerServices = {
  createCustomerDB,
};
