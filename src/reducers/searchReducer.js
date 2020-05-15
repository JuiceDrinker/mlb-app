const searchReducer = (state, action) => {
  switch (action.type) {
    case "handleSearch":
      return {
        ...state,
        searchQuery: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
