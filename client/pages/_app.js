import { Slice } from "@/src/redux/slice";
import "@/styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../src/redux/slice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    vehicle: carReducer,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
