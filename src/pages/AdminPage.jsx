import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Bitki from "./Bitki";
import Etkiler from "./Etkiler";

function AdminPage() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <br />

          <h2
            style={{
              fontSize: "35px",
              color: "green",
            }}
          >
            Admin Panel
          </h2>
          <hr />
          <ul className="admin-class">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="bitki">Bitki İşlemleri</Link>
            </li>
            <li>
              <Link to="etki">Etki İşlemleri</Link>
            </li>
          </ul>

          <Routes>
            <Route path="bitki/*" element={<Bitki />} />
            <Route path="etki/*" element={<Etkiler />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
