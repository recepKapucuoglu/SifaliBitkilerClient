export const getAllBitkiReducer = (state = { bitkiler: [] }, action) => {
  switch (action.type) {
    case "GETALL_BITKI_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GETALL_BITKI_SUCCESS":
      return {
        loading: false,
        bitkiler: action.payload,
      };
    case "GETALL_BITKI_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
