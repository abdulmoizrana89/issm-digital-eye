import { create } from "zustand";

import { createSidebarSlice } from "./useSidebarSlice";
import { createCategoriesSlice, ICategoriesSlice } from "./useCategoriesSlice";

const useStore = create<ICategoriesSlice & any>()((...a) => ({
  ...createSidebarSlice(...a),
  ...createCategoriesSlice(...a),
}));

export default useStore;
