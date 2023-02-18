import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cartSlice } from "../store/cart/cart.slice";

const allActions = {
  ...cartSlice.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
