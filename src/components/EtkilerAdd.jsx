import axios from "axios";
import React from "react";
import { useState } from "react";

function EtkilerAdd() {
  const [Name, setName] = useState("");

  const addEtki = () => {
    axios
      .post("https://localhost:44312/api/sikayetetki/ekle", {
        etkisi: Name,
      })
      .then((r) => alert("Eklendi"))
      .finally(() => (window.location.href = "/admin/etki/list"));
  };
  function formHandler(e) {
    e.preventDefault();
    addEtki();
    console.log(Name);
  }
  return (
    <div>
      <form onSubmit={formHandler}>
        <input
          type="text"
          placeholder="Lütfen Etki Adı Giriniz (ÖRNEK : Örsürük , Baş Ağrısı vb)"
          value={Name}
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />

        <button className="btn btn-danger my-3" type="submit">
          Etkiyi Ekle
        </button>
      </form>
    </div>
  );
}

export default EtkilerAdd;
