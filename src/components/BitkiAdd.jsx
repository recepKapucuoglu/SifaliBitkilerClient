import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatch, useSelector } from "react-redux";
import { getAllEtkiAction } from "../store/actions/adminEtkiActions";
import { getAllEtkiReducer } from "../store/reducers/adminEtkiReducers";
import EtkilerList from "./EtkilerList";

function BitkiAdd() {
  const [selectetki, setselectetki] = useState("");
  const [selectEtkiId, setselectEtkiId] = useState("");
  const [BitkiName, setBitkiName] = useState("");
  const [BitkiAciklama, setBitkiAciklama] = useState("");
  const [BitkiResimUrl, setBitkiResimUrl] = useState("");
  const dispatch = useDispatch();
  const etkiState = useSelector((state) => state.getAllEtkiReducer);
  const { etkiler } = etkiState;
  useEffect(() => {
    dispatch(getAllEtkiAction());
  }, []);

  function formHandler(e) {
    e.preventDefault();
    const bitki = {
      BitkiName,
      BitkiAciklama,
      BitkiResimUrl,
      SikayetEtkiId: selectEtkiId,
    };
    axios
      .post("https://localhost:44312/api/bitki/ekle", bitki)
      .then(alert("bitki eklendi"))
      .finally(() => (window.location.href = "/admin/bitki/list"));
  }

  return (
    <div>
      <div>
        <form onSubmit={formHandler}>
          <input
            type="text"
            id="newbitkiname"
            className="form-control p-1 my-1"
            placeholder="Eklenecek Bitki İsmini Giriniz"
            onChange={(e) => setBitkiName(e.target.value)}
          />
          <input
            type="text"
            id="newbitkiaciklama"
            className="form-control p-1 my-1"
            placeholder="eklenecek Açıklamayı Giriniz"
            onChange={(e) => setBitkiAciklama(e.target.value)}
          />
          <input
            type="text"
            id="newbitkiresim"
            className="form-control p-1 my-1"
            placeholder="eklenecek Resim URL'sini Giriniz"
            onChange={(e) => setBitkiResimUrl(e.target.value)}
          />
          <input
            type="text"
            id="selectetki"
            className="form-control p-1 my-1"
            placeholder="eklenecek etki yi aşağıdan seçiniz "
            value={selectetki}
          />
          <ul className="list-group text-black">
            <p> Etki türü eklemek için aşağıdakilerden birini seçiniz</p>
            {etkiler.map((etki) => (
              <li
                className="list-group-item"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setselectetki(etki.etkisi);
                  setselectEtkiId(etki.id);
                }}
              >
                {etki.etkisi}
              </li>
            ))}
          </ul>
          <button className="btn btn-danger my-3" type="submit">
            Bitki Ekle
          </button>
        </form>
      </div>
    </div>
  );
}

export default BitkiAdd;
