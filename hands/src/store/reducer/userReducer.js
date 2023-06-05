const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    case "DELETE_USER":
      return { ...action.payload };
    default:
      return state;
  }
};

export default userReducer;

const INITAL_STATE = {
  name: null,
};
