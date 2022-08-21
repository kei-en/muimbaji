import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from '../img/fishbowl.png';
import { RiCloseFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import Headroom from "react-headroom";


const Nav = () => {
    const [menuStatus, setMenuStatus] = useState(false);
    
    let activeStyle = {
        color: "#DAFDBA",
        fontSize: "4rem",
        borderBottom: "0.5rem solid #DAFDBA",
        paddingLeft: "0.4em",
        transition: "0.5s ease"
    }
    
    return (
        <NavContainer>       
            <h1>
                <NavLink to="/" id='logo'>
                    <img src={logo} alt="logo" />
                </NavLink>
            </h1>
            <button onClick={() => setMenuStatus(!menuStatus)}>
                {menuStatus && (
                    <FiMenu />
                ) || (
                    <RiCloseFill />
                )}
            </button>
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
                        <NavLink to='shop' style={({ isActive }) =>
                        isActive ? activeStyle : undefined}>Shop</NavLink>
                    </li>
                </ul>
            </NavStyled>
        </NavContainer>
    )
};

//Styles
const NavContainer = styled(Headroom)`
    flex-direction: row;
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    .headroom {
        display: flex;
        width: 100%;
        max-height: 5rem;
        justify-content: space-between;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }
    .headroom--unfixed {
        position: relative;
        transform: translateY(0);
    }
    .headroom--scrolled {
        transition: transform 200ms ease-in-out;
    }
    .headroom--unpinned {
        position: fixed;
        transform: translateY(-100%);
    }
    .headroom--pinned {
        position: fixed;
        transform: translateY(0%);
    }
    img {
        max-height: 4rem;
        padding: 0.5rem
    }
    .inactive {
        display: none;
    }
    button {
        font-size: 2rem;
        border: none;
        text-align: center;
        margin: 1rem;
        &:hover {
            color: #DAFDBA;
            background-color: inherit;
        }
    }
`;
const NavStyled = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;
    align-items: center;
    padding: 1rem 15rem;
    z-index: 10;
    position: fixed;
    top: 4rem;
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    a {
        color: white;
        text-decoration: none;
        font-size:3.5rem;
        &:hover {
            color: #DAFDBA;
            font-size: 4rem;
            border-bottom: 0.2rem solid #DAFDBA;
            transition: 0.3s ease-in-out;
        }
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        min-width: 70%; 
    }
    li {
        padding-left: 5rem;
        position: relative;
    }
`;

export default Nav;