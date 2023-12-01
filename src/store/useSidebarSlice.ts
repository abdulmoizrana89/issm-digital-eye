export const createSidebarSlice = (set: any) => ({
  isCollapsed: false,
  toggleCollapse: () =>
    set((state: any) => ({ isCollapsed: !state.isCollapsed })),
});
