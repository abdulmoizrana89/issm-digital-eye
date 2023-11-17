import { create } from "zustand";

type State = {
  selectedComponent: any;
  setSelectedComponent: (component: any) => void;
};

const useStore = create<State>((set) => ({
  selectedComponent: "Home",
  setSelectedComponent: (component: any) =>
    set(() => ({
      selectedComponent: component,
    })),
}));

export default useStore;
