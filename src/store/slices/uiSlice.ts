import { createSlice } from "@reduxjs/toolkit";

type UiState = {
  isMobileNavOpen: boolean;
};

const initialState: UiState = {
  isMobileNavOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openMobileNav: (state) => {
      state.isMobileNavOpen = true;
    },
    closeMobileNav: (state) => {
      state.isMobileNavOpen = false;
    },
    toggleMobileNav: (state) => {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
  },
});

export const { openMobileNav, closeMobileNav, toggleMobileNav } = uiSlice.actions;
export default uiSlice.reducer;
