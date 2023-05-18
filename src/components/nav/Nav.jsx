import React from "react";
import SearchBar from "../searchBar/SearchBar.jsx"
import { Link, NavLink } from "react-router-dom";
import { Routes } from "react-router-dom";

export default function Nav(props) {
    return(
        <div>
            <NavLink to="/">
                <button> Home </button>
            </NavLink>
            <NavLink to="/about">
                <button> About </button>
            </NavLink>
            <SearchBar onSearch= {props.onSearch}/>
        </div>
    )
}