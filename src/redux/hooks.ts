import { ROOTState } from "src/redux/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ProjectActions } from "./actions/actions";
import { ThunkDispatch } from "redux-thunk";

export const useAppDispatch = useDispatch<
  ThunkDispatch<ROOTState, void, ProjectActions>
>;
export const useAppSelector: TypedUseSelectorHook<ROOTState> = useSelector;
