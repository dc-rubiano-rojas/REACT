import { create } from "zustand";
import { Vaccine } from "@/utils/types";

type VaccineToEditState = {
  vid?: string;
  pid?: string;
  name: string;
  img: string;
  startAt: string;
  endAt: string;
};

type VaccineState = {
  vaccines: Array<VaccineToEditState>;
};

type VaccineAction = {
  addVaccine: (vaccine: Vaccine) => void;
  reduceVaccines: () => void;
  addVaccineToEdit: (vaccine: Vaccine) => void;
  deleteVaccineToEdit: () => void;
};

// Create your store, which includes both state and (optionally) actions
/* const useVaccineStore = create<
  VaccineState & VaccineAction & VaccineToEditState
>((set) => ({
  vaccines: [],

  vid: "",
  pid: "",
  name: "",
  img: "",
  startAt: "",
  endAt: "",

  addVaccineToEdit: (vaccine: Vaccine) =>
    set((state) => ({
      vid: vaccine.vid,
      pid: vaccine.pid,
      name: vaccine.name,
      img: vaccine.img,
      startAt: vaccine.startAt,
      endAt: vaccine.endAt,
    })),

  deletePetToEdit: () =>
    set((state) => ({
      vid: "",
      pid: "",
      name: "",
      img: "",
      startAt: "",
      endAt: "",
    })),
})); */

const useVaccineStore = create<
  VaccineState & VaccineAction & VaccineToEditState
>((set) => ({
  vaccines: [],

  vid: "",
  pid: "",
  name: "",
  img: "",
  startAt: "",
  endAt: "",

  addVaccine: (vaccine: Vaccine) =>
    set((state) => ({
      vaccines: [
        ...state.vaccines,
        {
          vid: vaccine.vid,
          pid: vaccine.pid,
          name: vaccine.name,
          img: vaccine.img,
          startAt: vaccine.startAt,
          endAt: vaccine.endAt,
        },
      ],
    })),

  reduceVaccines: () =>
    set((state) => {
      return {
        vaccines: [],
      };
    }),

  addVaccineToEdit: (vaccine: Vaccine) =>
    set((state) => ({
      vid: vaccine.vid,
      pid: vaccine.pid,
      name: vaccine.name,
      img: vaccine.img,
      startAt: vaccine.startAt,
      endAt: vaccine.endAt,
    })),

  deleteVaccineToEdit: () =>
    set((state) => ({
      vid: "",
      pid: "",
      name: "",
      img: "",
      startAt: "",
      endAt: "",
    })),
}));

export default useVaccineStore;
