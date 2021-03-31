import React from 'react'
import { Button } from 'antd';
import { NavTop, LoginBtn, LogoName, RegisterBtn, RegisZone } from './navbar.styles'


export default function Navbar() {
    return (
        <NavTop>
            <LogoName>PRIMA LASER</LogoName>
            <RegisZone>
                <RegisterBtn> Register </RegisterBtn>
                <LoginBtn> Login </LoginBtn>
            </RegisZone>
        </NavTop>
    )
}
