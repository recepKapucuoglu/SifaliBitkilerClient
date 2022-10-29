import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllEtkiAction } from "../store/actions/adminEtkiActions";
function EtkilerList() {
  const dispatch = useDispatch();
  const etkiState = useSelector((state) => state.getAllEtkiReducer);
  const { etkiler } = etkiState;
  const etkiListele = () => {
    dispatch(getAllEtkiAction());
  };

  const deleteEtki = (ids) => {
    try {
      axios
        .post("https://localhost:44312/api/sikayetetki/delete", { Id: ids })
        .then(alert("etki silindi"));
      etkiListele();
    } catch (error) {
      alert("Bir şeyler ters gitti");
      console.log(error);
    }
  };

  useEffect(() => {
    etkiListele();
  }, []);

  return (
    <>
      <table className="table table-success">
        <thead>
          <tr>
            <th scope="col">Etkisi</th>
            <th scope="col">Sil / Güncelle</th>
          </tr>
        </thead>
        {etkiler.map((etki, index) => (
          <tbody key={index}>
            <tr>
              <td>{etki.etkisi}</td>
              <td>
                <i
                  className="fa fa-trash text-danger m-3"
                  onClick={() => {
                    deleteEtki(etki.id);
                  }}
                  style={{ cursor: "pointer" }}
                ></i>
                <Link to={`/admin/etki/list/${etki.id}`}>
                  <i className="fa fa-edit text-info"> </i>
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default EtkilerList;
