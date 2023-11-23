export type customer = {
  id: number;
  userName: string;
  fullName: {
    fristName: string;
    lastName: string;
  };
  age: string;
  email: string;
  isActive: 'active' | 'inactive';
  hobbies: [string, string];
  address: {
    street: string;
    city: string;
    country: string;
  };
};
