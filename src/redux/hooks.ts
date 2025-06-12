import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { ProjectActions } from "./actions/actions";
import { Dispatch } from "redux";

export const useAppDispatch = useDispatch<Dispatch<ProjectActions>>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
