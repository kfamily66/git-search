const defaultItemsState = [];

export default (state = defaultItemsState, action) => {
  switch (action.type) {
    case "REPOS_FETCH_SUCCEEDED":
      return [...action.repos];
    case "REPOS_FETCH_FAILED":
      return [];
    default:
      return state;
  }
};
