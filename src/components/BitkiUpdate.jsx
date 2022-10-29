import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function BitkiUpdate() {
  var { catchid } = useParams();
  const [bitkiEtki, setbitkiEtki] = useState([]); //getbyidyegoreliste
  const [etkiler, setetkiler] = useState([]);
  const [BitkiName, setBitkiName] = useState("");
  const [BitkiAciklama, setBitkiAciklama] = useState("");
  const [BitkiResimUrl, setBitkiResimUrl] = useState("");
  const [skills, setskills] = useState([]);

  useEffect(() => {
    getByIdBitkis();
    getAllBitkis();
  }, []);
  const getByIdBitkis = () => {
    fetch(`https://localhost:44312/api/bitki/getbyid?id=${catchid}`)
      .then((res) => res.json())
      .then((res) =>
        setbitkiEtki(res.data[0].sikayetEtkis.map((i) => i.sikayetEtki))
      );
  };

  const getAllBitkis = () => {
    fetch("https://localhost:44312/api/sikayetetki/listele")
      .then((res) => res.json())
      .then((res) => setetkiler(res.data));
  };
  const updateBitki = (id) => {
    axios
      .put("https://localhost:44312/api/bitki/edit", {
        Id: catchid,
        Name: BitkiName,
        Acıklaması: BitkiAciklama,
        ResimUrl: BitkiResimUrl,
      })
      .then(alert("Kullanıcı bilgileri değiştirildi."));

    axios
      .post(
        `https://localhost:44312/api/bitki/degistir?bitkiid=${catchid}`,
        skills
      )
      .then(alert("etkiler güncellendi."));
  };

  const handleSkills = (e) => {
    var { id, checked } = e.target;
    if (checked) {
      var newArray = [...skills, id];
      setskills(newArray);
    } else {
      for (var i = 0; i < skills.length; i++) {
        if (skills[i] === id) {
          skills.splice(i, 1);
          setskills(skills);
          console.log(skills);
        }
      }
    }
  };

  return (
    <div className="d-grid">
      <input
        type="text"
        id="newbitkiname"
        className="form-control p-1 my-1"
        placeholder="Güncellenecek Bitki İsmini Giriniz"
        onChange={(e) => setBitkiName(e.target.value)}
      />
      <input
        type="text"
        id="newbitkiaciklama"
        className="form-control p-1 my-1"
        placeholder="Güncellenecek Açıklamayı Giriniz"
        onChange={(e) => setBitkiAciklama(e.target.value)}
      />
      <input
        type="text"
        id="newbitkiresim"
        className="form-control p-1 my-1"
        placeholder="Güncellenecek Resim URL'sini Giriniz"
        onChange={(e) => setBitkiResimUrl(e.target.value)}
      />
      <div className="col-md-12 my-3">
        <label htmlFor="">Etkileri Güncelleyiniz...</label>
      </div>
      <div className="form-check">
        {etkiler.map((etki) => (
          <div>
            <input
              className="form-check-input border"
              type="checkbox"
              value={etki.etkisi}
              id={etki.id}
              onChange={(e) => handleSkills(e)}
            />
            {etki.etkisi}
          </div>
        ))}
      </div>

      <button
        className="btn btn-danger my-2 radius-15"
        onClick={() => updateBitki()}
      >
        Güncelle
      </button>
    </div>
  );
}

export default BitkiUpdate;
