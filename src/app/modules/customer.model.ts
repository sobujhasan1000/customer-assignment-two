import { Schema, model, connect } from 'mongoose';
import {
  Address,
  FullName,
  Orders,
  customer,
} from './customer/customer.interface';

const fullNameSchema = new Schema<FullName>({
  fristName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const addressSchema = new Schema<Address>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const orderSchema = new Schema<Orders>({
  productName: { type: String },
  Price: { type: Number },
  quantity: { type: Number },
});

const customerschema = new Schema<customer>({
  id: { type: Number },
  userName: { type: String, required: true },
  fullName: fullNameSchema,
  age: { type: String, required: true },
  email: { type: String, required: true },
  isActive: [true, false],
  hobbies: { type: String },
  address: addressSchema,
  orders: [addressSchema],
});
