export const getByIdEtkisAction = (id) => async (dispatch) => {
  dispatch({ type: "GETALL_BITKI_REQUEST" });

  try {
    var response = await fetch(
      `https://localhost:44312/api/sikayetetki/ByIdlistele?etkiid=${id}`
    )
      .then((res) => res.json())
      .then((res) => res.data[0].bitkis.map((b) => b.bitki));

    dispatch({ type: "GETALL_BITKI_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "GETALL_BITKI_FAILED", payload: error });
  }
};
