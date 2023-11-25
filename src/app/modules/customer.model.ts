import { Schema, model } from 'mongoose';
import {
  Address,
  FullName,
  Orders,
  customer,
} from './customer/customer.interface';

const fullNameSchema = new Schema<FullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const addressSchema = new Schema<Address>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const orderSchema = new Schema<Orders>({
  productName: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

const customerschema = new Schema<customer>({
  id: { type: Number },
  userName: { type: String, required: true },
  fullName: fullNameSchema,
  age: { type: String, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: String },
  address: addressSchema,
  orders: [orderSchema],
});

export const customermodel = model<customer>('customer', customerschema);
