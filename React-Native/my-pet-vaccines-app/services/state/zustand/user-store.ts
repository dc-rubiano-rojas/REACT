import { create } from "zustand";
import { UserToRegister, UserToUpdate } from "@/utils/types";

type UserState = {
  uid: any;
  name: string;
  lastname: string;
  email: string;
  contactNumber: string;
  petsId: string[];
};

type UserAction = {
  updateUser: (user: UserToRegister | UserToUpdate) => void;
  deleteUser: () => void;
};

// Create your store, which includes both state and (optionally) actions
const useUserStore = create<UserState & UserAction>((set) => ({
  uid: "",
  name: "",
  lastname: "",
  email: "",
  contactNumber: "",
  petsId: [],
  updateUser: (user: UserToRegister | UserToUpdate) =>
    set((state) => ({
      uid: user.uid,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      contactNumber: user.contactNumber,
      petsId: [...user.petsId],
    })),
  deleteUser: () =>
    set((state) => ({
      uid: "",
      name: "",
      lastname: "",
      email: "",
      contactNumber: "",
      petsId: [],
    })),
}));

export default useUserStore;
