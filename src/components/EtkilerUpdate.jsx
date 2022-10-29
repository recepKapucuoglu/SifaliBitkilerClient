import axios from "axios";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function EtkilerUpdate() {
  var { catchid } = useParams();
  const [Name, setName] = useState("");

  const updateEtki = () => {
    axios
      .put("https://localhost:44312/api/sikayetetki/edit", {
        Id: catchid,
        Etkisi: Name,
      })
      .then((r) => alert("güncellendi"))
      .finally(() => (window.location.href = "/admin/etki/list"));
  };
  function formHandler(e) {
    e.preventDefault();
    updateEtki();
  }

  return (
    <div>
      <div>
        <form onSubmit={formHandler}>
          <input
            type="text"
            placeholder="Güncelleyeceğiniz Etki Adını giriniz"
            value={Name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />

          <button className="btn btn-danger my-3" type="submit">
            Güncelle
          </button>
        </form>
      </div>
    </div>
  );
}
export default EtkilerUpdate;
