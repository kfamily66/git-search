const defaultLikesState = [];

export default (state = defaultLikesState, action) => {
  switch (action.type) {
    case "TOGGLE_LIKE":
      if (state.filter(item => item.id === action.item.id).length > 0) {
        return state.filter(item => item.id !== action.item.id);
      } else {
        return [...state, action.item];
      }
    default:
      return state;
  }
};
