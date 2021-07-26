const nameSpace = "TOAST:";

// action type
export const SHOW_TOAST = `${nameSpace}SHOW_TOAST`;
export const HIDE_TOAST = `${nameSpace}HIDE_TOAST`;

// action
export const actShowToast = () => {
  return {
    type: SHOW_TOAST,
  };
};

export const actHideToast = () => {
  return {
    type: HIDE_TOAST,
  };
};
