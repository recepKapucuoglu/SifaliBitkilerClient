import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  deleteBitkiAction,
  getAllBitkiAction,
} from "../store/actions/adminBitkiActions";
import { getAllBitkiReducer } from "../store/reducers/adminBitkiReducers";

function BitkiListele() {
  const dispatch = useDispatch();
  const bitkiState = useSelector((state) => state.getAllBitkiReducer);
  const { bitkiler } = bitkiState;

  const getAllBitkis = () => {
    dispatch(getAllBitkiAction());
  };

  useEffect(() => {
    getAllBitkis();
  }, []);

  return (
    <>
      {" "}
      <div className="  radius-15">
        <div className=" text-center">
          {bitkiler.map((bitki) => (
            <div className="mycards border radius-15 p-4">
              <img
                src={
                  bitki.resimUrl
                    ? bitki.resimUrl
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                }
                alt={bitki.name}
                width={250}
                height={250}
              />
              <h5 className="mb-0 mt-5">Adı: {bitki.name}</h5>
              <p className="mb-3">Aciklamasi: {bitki.acıklaması}</p>
              {bitki.sikayetEtkis.map((etki) => (
                <p className="mb-3">yararları:{etki.sikayetEtki.etkisi} </p>
              ))}
              <div>
                <Link to={`/admin/bitki/list/${bitki.id}`}>
                  <i className="fa fa-edit text-info">DUZENLE </i>
                </Link>
                <i
                  className="fa fa-trash text-danger m-3"
                  onClick={() => {
                    dispatch(deleteBitkiAction(bitki.id));
                    getAllBitkis();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  SIL
                </i>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BitkiListele;
