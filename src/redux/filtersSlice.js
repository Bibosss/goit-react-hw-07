import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        name: "",
    },
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        }
    }
})

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = (state) => state.filters.name;