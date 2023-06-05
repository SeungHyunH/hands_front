export const addUser = (item) => {
  return {
    type: "ADD_USER",
    payload: item,
  };
};

export const deleteUser = (item) => {
  return {
    type: "DELETE_USER",
    payload: item,
  };
};
