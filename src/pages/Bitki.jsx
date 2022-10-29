import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import BitkiAdd from "../components/BitkiAdd";
import BitkiDelete from "../components/BitkiDelete";
import BitkiListele from "../components/BitkiListele";
import BitkiUpdate from "../components/BitkiUpdate";
import { getAllBitkiAction } from "../store/actions/adminBitkiActions";

function Bitki() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-beetween">
          <ul className="admin-class">
            <li>
              <Link to="list"> Listeleme/Güncelleme/Silme</Link>
            </li>
            <li>
              <Link to="add">Ekleme</Link>
            </li>
          </ul>

          <Routes>
            <Route path="list" element={<BitkiListele />} />
            <Route path="delete" element={<BitkiDelete />} />
            <Route path="add" element={<BitkiAdd />} />
            <Route path="list/:catchid" element={<BitkiUpdate />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Bitki;
