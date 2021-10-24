import * as ActionType from "./actionType";

let initState = { active: "home" };

export const navigateReducer = (state = initState, action) => {
  let modifyState = { ...state };
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE:
      modifyState.active = action.page;
      return modifyState;
  }
  return state;
};
