export const createSidebarSlice: any = (set: any) => ({
  isCollapsed: false,
  toggleCollapse: () =>
    set((state: any) => ({ isCollapsed: !state.isCollapsed })),
});
