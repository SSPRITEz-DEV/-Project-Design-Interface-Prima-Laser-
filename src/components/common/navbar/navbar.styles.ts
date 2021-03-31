import styled from '@emotion/styled'
import { Button } from 'antd';


export const NavTop = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left : 280px;
    padding-right : 280px;
    
    position: absolute;
    width: 100%;
    height: 80px;
    left: 0px;
    top: 0px;

    background: whitesmoke;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    z-index:1000; 
`
export const RegisZone = styled.div`
    /* Regis zone */
    /* Auto Layout */

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0px;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 10px;

`

export const LogoName = styled.h1`
    margin-top: 10px;
    font-size: 30px;
    color: goldenrod;
`
export const LoginBtn = styled(Button)`
    margin-left: 20px;

    font-size: 15px;
    width: 150px;
    height: 35px;
    border: none;
    background-color: goldenrod;
    color: white;
    box-shadow: none;
    &:hover{
        background-color: gray;
        color: white;
        border: none;
        box-shadow: none;
    }
    &:focus{
        background-color: gray;
        color: white;
        border: none;
        box-shadow: none;
    }
`
export const RegisterBtn = styled(Button)`
    font-size: 15px;
    width: 150px;
    height: 35px;
    border: none;
    /* background-color: none; */
    color: goldenrod;
    box-shadow: none;
    &:hover{
        background-color: gray;
        color: white;
        border: none;
        box-shadow: none;
    }
    &:focus
    {
        background-color: gray;
        color: white;
        border: none;
        box-shadow: none;
    }
`
