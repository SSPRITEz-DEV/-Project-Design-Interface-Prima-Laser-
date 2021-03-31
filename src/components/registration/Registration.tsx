import React from 'react'
import { Bluebox, Btn1, HeaderText, Redbox} from './registration.styles'
import { Button } from 'antd';

export default function Registration() {
    return (
        <div>
            
            <Redbox/>
            <Bluebox/>
            <HeaderText textColor='red' fontSize={30} >TEST Text</HeaderText>
            <Button type="primary">Primary Button</Button>
            <Btn1>Submit</Btn1>
        </div>
    )
}
