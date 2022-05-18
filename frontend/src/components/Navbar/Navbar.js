import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/navbar.scss"
import Login from "./Login";

export default function Navbar() {
  const [mode, setMode] = useState("")
  return (
    <div className="nav">
      <NavLink to={'/'}>
        <h2 className="nav--title"> What's Sup? </h2>
      </NavLink>
      <div>
        {mode === "" && <button onClick={() => setMode("SignIn")}>Login</button>} /
        {mode === "" && <button onClick={() => setMode("SignUp")}>Sign up</button>}
        {(mode === "SignIn" || mode === "SignUp") && <Login mode={mode} setMode={setMode}/>}
      </div>
    </div>
  );
}