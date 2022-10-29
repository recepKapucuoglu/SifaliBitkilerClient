import axios from "axios";

export const getAllBitkiAction = () => async (dispatch) => {
  dispatch({ type: "GETALL_BITKI_REQUEST" });

  try {
    // const response = await axios.get(
    //   "https://localhost:44312/api/bitki/listele"
    // );
    const response = await fetch(
      "https://localhost:44312/api/bitki/listele"
    ).then((res) => res.json());
    console.log(response.data);
    dispatch({ type: "GETALL_BITKI_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GETALL_BITKI_ERROR", payload: error });
  }
};

export const deleteBitkiAction = (id) => async (dispatch) => {
  try {
    axios
      .post(`https://localhost:44312/api/bitki/delete`, {
        id: id,
      })
      .then(alert("Bitki Başarıyla Silindi"));
  } catch (error) {
    alert("Bir şeyler ters gitti");
    console.log(error);
  }
};
