import { ProjectActions } from "./../redux/actions/actions";
import { Middleware } from "redux";
import { logAction } from "src/metrics/logAction";
import { ROOTState } from "src/redux/store";

export const logAtionMiddleware: Middleware<{}, ROOTState> = (storeAPI) => {
  return function WrapDispatch(next) {
    return function handleAction(action: unknown) {
      if (isProjectAction(action)) {
        logAction(action);
      }
      return next(action);
    };
  };
};

function isProjectAction(action: unknown): action is ProjectActions {
  return typeof action === "object" && action !== null && "type" in action;
}
