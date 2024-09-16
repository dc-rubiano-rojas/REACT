export type FormDataToRegisterAPet = {
  pid?: string;
  Age: string;
  Breed: string;
  Color: string;
  Gender: string;
  Height: string;
  Name: string;
  Weight: string;
  uid: string[];
};

export type User = {
  uid: string | null; // email
  displayName?: string | null;
  email: string | null;
  phoneNumber?: string | null;
  photoURL?: string | null;
  providerId: string | null; // Password
};

export type UserToRegister = {
  uid: any;
  name: "";
  lastname: "";
  email: "";
  contactNumber: "";
  petsId: [];
};

export type UserToUpdate = {
  uid: any;
  name: string;
  lastname: string;
  email: string;
  contactNumber: string;
  petsId: string[];
};

export type Pet = {
  pid?: string;
  name: "";
  age: "";
  gender: "";
  weight: "";
  breed: "";
  color: "";
  uid: [""];
  image: "";
};
export type PetDataToManage = {
  pid?: "";
  name: "";
  age: "";
  gender: "";
  weight: "";
  breed: "";
  color: "";
  uid: [""];
  image: "";
};

export type VaccineToRegister = {
  name: string;
  img: string;
  startAt: string;
  endAt: string;
};

export type Vaccine = {
  vid: string;
  pid: string;
  name: string;
  img: string;
  startAt: string;
  endAt: string;
};

export enum ToastType {
  success = "success",
  error = "error",
  info = "info",
}
