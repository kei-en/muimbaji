import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from '../img/fishbowl.png';
import { RiCloseFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";


const Nav = () => {
    const [menuStatus, setMenuStatus] = useState(true);
    
    let activeStyle = {
        color: "#A68D60",
        fontSize: "4rem",
        borderBottom: "0.5rem solid #A68D60",
        paddingLeft: "0.4em",
        transition: "0.5s ease"
    }
    
    return (
        <NavContainer >       
            <button onClick={() => setMenuStatus(!menuStatus)}>
                {(menuStatus && 
                    <BsThreeDotsVertical />
                    )    ||
                    <RiCloseFill />
                }
            </button>
            <h1>
                <NavLink to="/" id='logo'>
                    <img src={logo} alt="logo" />
                </NavLink>
            </h1>
            <NavStyled disableInlineStyles className={`${menuStatus ? "inactive" : ""}`}>
                <ul>
                    <li>
                    <NavLink to='/' style={({ isActive }) =>
                        isActive ? activeStyle : undefined}
                    >Intro</NavLink>
                    </li>
                    <li>
                        <NavLink to='music' style={({ isActive }) =>
                        isActive ? activeStyle : undefined}>Music</NavLink>
                    </li>
                    <li>
                        <NavLink to='media' style={({ isActive }) =>
                        isActive ? activeStyle : undefined}>Media</NavLink>
                    </li>
                    <li>
                        <a href="http://localhost:3001">Shop</a>
                    </li>
                </ul>
            </NavStyled>
        </NavContainer>
    )
};

//Styles
const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: linear-gradient(to right, rgba(0,0,0,0), rgba(35,35,35,0.85),rgba(0,0,0,0));;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    height: 4.5rem;
    h1 {
        margin-right: auto;
        margin-left: auto;
        width: auto;
    }
    img {
        max-height: 4rem;
        padding: 0.5rem;
    }
    .inactive {
        display: none;
    }
    button {
        font-size: 2rem;
        border: none;
        text-align: center;
        font-weight: bolder;
        margin: 1rem;
        color: #A68D60;
        &:hover {
            color: #BFB6AE;
            background-color: inherit;
        }
    }
`;
const NavStyled = styled.div`
    width: 400px;
    height: 90vh;
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;
    align-items: center;
    padding: 1rem 0rem;
    z-index: 10;
    position: fixed;
    top: 4.5rem;
    background: linear-gradient(to right, rgba(0,0,0,0.85) 0%,rgba(0,0,0,0) 100%);
    a {
        color: #F2F2F2;
        text-decoration: none;
        font-size:3.5rem;
        &:hover {
            color: #BFB6AE;
            font-size: 3rem;
            border-bottom: 0.2rem solid #BFB6AE;
            transition: 0.3s ease-in-out;
        }
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        min-width: 70%; 
    }
`;

export default Nav;