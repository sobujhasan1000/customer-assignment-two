export type FullName = {
  firstName: string;
  lastName: string;
};

export type Address = {
  street: string;
  city: string;
  country: string;
};

export type Orders = {
  productName: string;
  price: number;
  quantity: number;
};

export type customer = {
  id: number;
  password: string;
  userName: string;
  fullName: FullName;
  age: string;
  email: string;
  isActive: true | false;
  hobbies?: string[];
  address: Address;
  orders?: Orders[];
};
