import React from 'react'
import {Button, Space} from 'antd';
import {Empty} from "./Empty";
import './fix.css'

export default function Hello() {
    return <Space direction={"vertical"}>
        <Space id={"row1"}>
            <Button>AAA</Button>
            <Button>BBB</Button>
            <Empty/>
            <Empty/>
            <Empty/>
            <Empty/>
            <Button>CCC</Button>
        </Space>
        <Space id={"row2"}>
            <Button>AAA</Button>
            <Button>BBB</Button>
            <Empty/>
            <Empty/>
            <Empty/>
            <Empty/>
            <Button>CCC</Button>
        </Space>
    </Space>
};
