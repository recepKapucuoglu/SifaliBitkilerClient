import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBitkiAction } from "../store/actions/adminBitkiActions";
import { getAllEtkiAction } from "../store/actions/adminEtkiActions";
import { getByIdEtkisAction } from "../store/actions/homefilterActions";

function Home() {
  const dispatch = useDispatch();
  const bitkiState = useSelector((state) => state.getAllBitkiReducer);
  const etkiState = useSelector((state) => state.getAllEtkiReducer);
  const { bitkiler } = bitkiState;
  const { etkiler } = etkiState;
  useEffect(() => {
    dispatch(getAllBitkiAction());
    dispatch(getAllEtkiAction());
  }, []);
  const [idCatch, setidCatch] = useState([]);
  console.log(idCatch);

  console.log(bitkiler);
  return (
    <div className="container">
      <h1 className="text-center my-5"> Bitki Listesi </h1>
      <div className="row">
        <div>
          {" "}
          <div className="row justify-content-center mt-2 shadow-lg p-3 bg-white rounded">
            <div className="col-md-2 ">
              <select
                name=""
                id=""
                className="form-select"
                onChange={(e) => setidCatch(e.target.value)}
              >
                {etkiler.map((etki) => (
                  <>
                    <option value={etki.id}>{etki.etkisi}</option>
                  </>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-danger w-50"
                onClick={() => {
                  dispatch(getByIdEtkisAction(idCatch));
                }}
              >
                Filtrele
              </button>
              <button
                className="btn btn-success w-50 h-750 "
                onClick={() => {
                  dispatch(getAllBitkiAction());
                }}
              >
                Tümünü Göster
              </button>
            </div>
          </div>
        </div>

        {bitkiler.map((bitki) => (
          <div key={bitki.id} className="col-md-3 my-4">
            <div className=" card item-card card-block mb-3 ">
              <h6 className=" card-title text-right mb-2 mt-2">
                <i className="material-icons">{bitki.name}</i>
              </h6>
              <img src={bitki.resimUrl} alt="#" />
              <h5 className="item-card-title mt-3 mb-3">
                Tanım: {bitki.acıklaması}
              </h5>
              <h6 className="item-card-title mt-3 mb-3">
                {" "}
                <ul>
                  {bitki.sikayetEtkis.map((etki) => (
                    <li>{etki.sikayetEtki.etkisi} </li>
                  ))}
                </ul>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
