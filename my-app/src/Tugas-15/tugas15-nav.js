import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Tugas-9">Pengenalan ReactJS</Link>
        </li>
        <li>
          <Link to="/Tugas-10">Components & Props</Link>
        </li>
        <li>
          <Link to="/Tugas-11">State & Components Lifecycle</Link>
        </li>
        <li>
          <Link to="/Tugas-12">Lists & Forms</Link>
        </li>
        <li>
          <Link to="/Tugas-13">Hooks & axios</Link>
        </li>
        <li>
          <Link to="/Tugas-14">Context</Link>
        </li>
      </ul>
    </>
  )
}

export default Nav