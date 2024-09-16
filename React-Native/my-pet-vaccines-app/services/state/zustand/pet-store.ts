import { create } from "zustand";
import { Pet } from "@/utils/types";

type PetToEditState = {
  pid?: string;
  name: string;
  age: string;
  gender: string;
  weight: string;
  breed: string;
  color: string;
  uid: string[];
  image: string;
};

type PetState = {
  pets: Array<Pet>;
};

type PetAction = {
  addPet: (pet: Pet) => void;
  reducePets: () => void;
  addPetToEdit: (pet: Pet) => void;
  deletePetToEdit: () => void;
};

// Create your store, which includes both state and (optionally) actions
const usePetStore = create<PetState & PetAction & PetToEditState>((set) => ({
  pets: [],

  pid: "",
  name: "",
  age: "",
  gender: "",
  weight: "",
  breed: "",
  color: "",
  uid: [""],
  image: "",

  addPetToEdit: (pet: Pet) =>
    set((state) => ({
      pid: pet.pid,
      name: pet.name,
      age: pet.age,
      gender: pet.gender,
      weight: pet.weight,
      breed: pet.breed,
      color: pet.color,
      uid: pet.uid,
      image: pet.image,
    })),

  deletePetToEdit: () =>
    set((state) => ({
      pid: "",
      name: "",
      age: "",
      gender: "",
      weight: "",
      breed: "",
      color: "",
      uid: [],
      image: "",
    })),

  addPet: (pet: Pet) =>
    set((state) => ({
      pets: [
        ...state.pets,
        {
          pid: pet.pid,
          name: pet.name,
          age: pet.age,
          gender: pet.gender,
          weight: pet.weight,
          breed: pet.breed,
          color: pet.color,
          uid: pet.uid,
          image: pet.image,
        },
      ],
    })),

  reducePets: () =>
    set((state) => {
      return {
        pets: [],
      };
    }),
}));

export default usePetStore;
