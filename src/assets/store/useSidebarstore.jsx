import create from "zustand";

const useSidebarStore = create((set) => ({
  isExpanded: false,
  toggleSidebar: () =>
    set((state) => ({ isExpanded: !state.isExpanded })),
}));

export default useSidebarStore;
