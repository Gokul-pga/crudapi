const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  Cars: [],
  singleCar: {},
};

const carSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    getCars: (state, { payload }) => {
      state.Cars = payload;
    },
    getCarsByID: (state, { payload }) => {
      const id = payload;
      const index = state.Cars.find((Cars) => Cars._id === id);
      state.singleCar = index;
    },
  },
});
export default carSlice.reducer;
export const { getCars, getCarsByID } = carSlice.actions;
