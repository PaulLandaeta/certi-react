const types = {
  gradesDeleteAll: "grades - delete all",
  gradeChange: "grade - changed",
  login: "login User",
  logout: "log out User",
};

const initialValues = {
  auth: false,
  grades: [
    {
      id: 1,
      grade: 20,
    },
    {
      id: 2,
      grade: 30,
    },
    {
      id: 3,
      grade: 40,
    },
  ],
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
    case types.gradeChange:
      return {
        ...state,
        grades: [{ id: 3, grade: 50 }],
      };
    case types.gradesDeleteAll:
      return {
        ...state,
        grades: [],
      };
    default:
      return state;
  }
};

export { initialValues, types };

export default storeReducer;
