import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import EtkilerAdd from "../components/EtkilerAdd";
import EtkilerList from "../components/EtkilerList";
import EtkilerUpdate from "../components/EtkilerUpdate";

function Etkiler() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-beetween">
          <ul className="admin-class">
            <li>
              <Link to="list"> Listeleme/Güncelleme/Sil</Link>
            </li>
            <li>
              <Link to="add">Ekleme</Link>
            </li>
          </ul>

          <Routes>
            <Route path="list" element={<EtkilerList />} />
            <Route path="add" element={<EtkilerAdd />} />
            <Route path="list/:catchid" element={<EtkilerUpdate />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Etkiler;
