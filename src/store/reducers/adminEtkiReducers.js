export const getAllEtkiReducer = (state = { etkiler: [] }, action) => {
  switch (action.type) {
    case "GETALL_ETKI_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GETALL_ETKI_SUCCESS":
      return {
        loading: false,
        etkiler: action.payload,
      };
    case "GETALL_ETKI_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateEtkiReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_ETKI_REQUEST":
      return {
        updateloading: true,
        ...state,
      };
    case "UPDATE_ETKI_SUCCESS":
      return {
        updateloading: false,
        updatesuccess: true,
      };
    case "UPDATE_ETKI_ERROR":
      return {
        updateloading: false,
        updateerror: action.payload,
      };
    default:
      return state;
  }
};
