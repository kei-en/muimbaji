import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../img/fishbowl.png';

const Nav = () => {
    return (
        <NavStyled>
            <h1>
                <Link to="/" id='logo'>
                    <img src={logo} alt="logo" />
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>Intro</Link>
                </li>
                <li>
                    <Link to='music'>Music</Link>
                </li>
                <li>
                    <Link to='media'>Media</Link>
                </li>
                <li>
                    <Link to='shop'>Shop</Link>
                </li>
            </ul>
        </NavStyled>
    )
};

//Styles
const NavStyled = styled.div`
    min-height: 5rem;
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    position: fixed;
    top: 0;
    background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(1,32,48,1));
    z-index: 10; 
    a {
        color: white;
        text-decoration: none;
        &:hover {
            color: #DAFDBA;
        }
    }
    img {
        width: 100%;
        height: 8vh;
    }
    ul {
        list-style: none;
        display: flex;
    }
    li {
        padding-left: 5rem;
        position: relative;
    }
`;

export default Nav;