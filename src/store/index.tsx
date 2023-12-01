import { create } from "zustand";
import { createSidebarSlice } from "./useSidebarSlice";

// type State = {
//   selectedComponent: any;
//   setSelectedComponent: (component: any) => void;
// };

const useStore = create<any>((...a) => ({
  ...createSidebarSlice(...a),
}));

export default useStore;
