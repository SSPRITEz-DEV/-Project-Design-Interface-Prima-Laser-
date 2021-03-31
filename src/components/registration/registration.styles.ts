import styled from '@emotion/styled'
import { Button } from 'antd';

export const Redbox = styled.div`
    width: 50px;
    height: 50px;
    background-color: red;
    &:hover{
        background-color:green;
    }
`
// inher
export const Bluebox = styled(Redbox)`
    background-color: blue;
`

// export const header text
export const HeaderText = styled.p<{textColor: string, fontSize: number}>`
    font-size: ${props=>props.fontSize}px;
    color: ${props=>props.textColor};
`

////////

export const Btn1 = styled(Button)`
    border: none;
    box-shadow: none;
    &:hover{
        background-color: gray;
        color: white;
        border: none;
        box-shadow: none;
    }
`