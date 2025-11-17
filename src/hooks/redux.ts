import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../store";

const useTypedUseSelector: TypedUseSelectorHook<RootState> = useSelector;
const useTypeDispatch = () => useDispatch<AppDispatch>();

const logger = useTypedUseSelector((state) => state.logger);

interface State {
  state: {
    data: string;
    loading: boolean;
  };
}

interface Obj<T> {
  name: T;
}
const obj: Obj<State> = {
  name: {
    state: {
      data: "abcd",
      loading: false,
    },
  },
};
