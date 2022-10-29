import axios from "axios";

export const getAllEtkiAction = () => async (dispatch) => {
  dispatch({ type: "GETALL_ETKI_REQUEST" });

  try {
    const response = await axios.get(
      "https://localhost:44312/api/sikayetetki/listele"
    );
    console.log(response.data.data);
    dispatch({ type: "GETALL_ETKI_SUCCESS", payload: response.data.data });
  } catch (error) {
    dispatch({ type: "GETALL_ETKI_ERROR", payload: error });
  }
};

export const deleteEtkiAction = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      "https://localhost:5001/api/sikayetetki/delete",
      { id }
    );
    console.log(response);
    alert("Menü Başarıyla Silindi");
    window.location.reload();
  } catch (error) {
    alert("Bir şeyler ters gitti");
    console.log(error);
  }
};

export const updateEtkiAction = (category) => async (dispatch) => {
  dispatch({ type: "UPDATE_ETKI_REQUEST" });

  try {
    const response = await axios.put(
      "https://localhost:5001/api/sikayetetki/edit",
      { category }
    );
    console.log(response + "giden istek");
    dispatch({ type: "UPDATE_ETKI_SUCCESS" });
    window.location.href = "/admin/categories/list";
  } catch (error) {
    dispatch({ type: "UPDATE_ETKI_ERROR" });
  }
};
