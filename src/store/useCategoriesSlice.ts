import type { StateCreator } from "zustand";

export interface ICategoriesSlice {
  categories: any[];
  subCategories: any[];
  addEventLog: (id: any, event: any) => void;
  removeEventLogs: (index: number) => void;
}

export const createCategoriesSlice: StateCreator<ICategoriesSlice> = (
  set: any
) => ({
  categories: [],
  subCategories: [
    {
      eventLogs: [
        { event: "Person Detected", timestamp: "10:32:56PM 11/10/2023" },
        { event: "Object Detected", timestamp: "10:32:56PM 11/10/2023" },
      ],
      label: "First Floor",
      id: 0,
    },
    { eventLogs: [], label: "Second Floor", id: 1 },
    { eventLogs: [], label: "Third Floor", id: 2 },
    { eventLogs: [], label: "Fourth Floor", id: 3 },
    { eventLogs: [], label: "Fifth Floor", id: 4 },
    { eventLogs: [], label: "Sixth Floor", id: 5 },
    { eventLogs: [], label: "Seventh Floor", id: 6 },
  ],
  addEventLog: (id: any, event: any) => {
    console.log("event=> ", id, event);
  },
  removeEventLogs: (index: number) => {
    set((state: any) => ({
      subCategories: state.subCategories.map((subCat: any, ind: number) => {
        if (ind === index) {
          return {
            ...subCat,
            eventLogs: [],
          };
        }
        return subCat;
      }),
    }));
  },
});
