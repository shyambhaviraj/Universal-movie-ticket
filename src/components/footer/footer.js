import React from 'react'
import styled from 'styled-components'

function header() {
    return (
        <Nav>
            <FooterLeft>
                <span>Developed with by shyambhavi raj</span>
            </FooterLeft>
            <FooterRight>
                <a target="_blank" rel="noreferrer" href="https://github.com/wweverma1/tfs-frontend"><img src="/images/github-icon.png" alt="Github Icon" /></a>
                
            </FooterRight>
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
`

const FooterLeft = styled.div`
    display: flex;
    width:50%;

    span {
        text-align: center;
    }
`

const FooterRight = styled.div`
    display: flex;
    justify-content: flex-end;
    width:50%;

    a {
        padding-right: 20px;
    }

    img {
        height: 30px;
    }
`