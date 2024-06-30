import React from 'react'
import styled from 'styled-components'

import {
    Link
} from "react-router-dom";

function header() {
    return (
        <Nav>
            <Link to="/" style={{"text-decoration":"none"}}>
                <Logo src="/images/5.jpg" alt="Movie-ticket logo" width="60" height="60" />
            </Link>
            <NavMenu>
                <font size="4" face="Arial" color="gray">MOVIE TICKET BOOKING WEBSITE</font>
             
            </NavMenu>
            <Link >
                <UserImg  />
            </Link>
        </Nav>
    )
}

export default header

const Nav = styled.nav`
    height: 70px; 
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;

    @media (max-width: 900px) {
        flex:1;
        display: flex;
        justify-content: space-between;
    }
`
const Logo = styled.img`
    width: 90px;
    height:50px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
 
  font{
      text-decoration:underline;
  }
    a {
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 40px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left:0;
                right:0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0.5);
            }
        }

        &:hover {
            span:after { 
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

    @media (max-width: 900px) {
        display: none;
    }
`

const UserImg = styled.img`
    background-image:url(/images/7.jpg);
    width: 90px;
    height: 60px;
    background-size:cover;
    background-position:center;
    border-radius: 50%;
    cursor: pointer;
`
