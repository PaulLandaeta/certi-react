const types = {
  login: "login User",
  logout: "log out User",
};

const initialValues = {
  auth: false,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        auth: true,
      };
    case types.logout:
      return {
        ...state,
        auth: false,
      };
    default:
      return state;
  }
};

export { initialValues, types };

export default storeReducer;
