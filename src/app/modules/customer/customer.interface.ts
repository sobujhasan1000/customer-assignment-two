export type FullName = {
  fristName: string;
  lastName: string;
};

export type Address = {
  street: string;
  city: string;
  country: string;
};

export type Orders = {
  productName: string;
  Price: number;
  quantity: number;
};

export type customer = {
  id: number;
  userName: string;
  fullName: FullName;
  age: string;
  email: string;
  isActive: true | false;
  hobbies?: [string];
  address: Address;
  orders?: [Orders];
};
