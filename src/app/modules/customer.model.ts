import { Schema, model, connect } from 'mongoose';
import { customer } from './customer/customer.interface';

const customerschema = new Schema<customer>({
  id: { type: Number },
  userName: { type: String },
});
