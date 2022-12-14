import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear()
        props.setLoggedIn(false);
        navigate("/")
    });
    return (
        <div></div>
    )
}

export default Logout;

