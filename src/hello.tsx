import React from 'react'
import {Button, Space} from 'antd';
import {Empty} from "./Empty";

export default function Hello() {
    return <Space>
        <Button>AAA</Button>
        <Button>BBB</Button>
        <Empty/>
        <Empty/>
        <Empty/>
        <Empty/>
        <Button>CCC</Button>
    </Space>
};
