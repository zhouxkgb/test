import React, { } from 'react'
import { Button, Table, Tag, } from 'antd'


interface Record {
    opinionContent: string,
    opinionLevel: string,
    opinionState: string,
    crtUser: string,
    crtTime: string
}


// 表格抬头
const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        render: (text: string, record: Record, index: number) => index + 1,
    },
    {
        title: '意见来源',
        dataIndex: 'opinionSource',
        key: 'opinionSource',
        render: (text: string) => <a onClick={() => { console.log(`jump to ${text}.`) }}>{text}</a>,
    },
    {
        title: '意见内容',
        dataIndex: 'opinionContent',
        key: 'opinionContent',
    },
    {
        title: '紧急度',
        dataIndex: 'opinionLevel',
        key: 'opinionLevel',
        render: (text: string) => (<Tag color={text === '紧急' ? '#f50' : '#2db7f5'}>{text}</Tag>)
    },
    {
        title: '状态',
        key: 'opinionState',
        dataIndex: 'opinionState',
        render: (code: string) => (<Tag color="green">{code}</Tag>)
    },
    {
        title: '提出人',
        key: 'crtUser',
        dataIndex: 'crtUser',
    },
    {
        title: '提出时间',
        key: 'crtTime',
        dataIndex: 'crtTime',
    },
    {
        title: '处理过程',
        key: 'doContent',
        dataIndex: 'doContent',
    },
    {
        title: '处理人',
        key: 'doUser',
        dataIndex: 'doUser',
    },
    {
        title: '处理时间',
        key: 'doTime',
        dataIndex: 'doTime',
    },
]

// 表格数据
const data = [
    {
        key: '1',
        opinionSource: '设备清单',
        crtUser: 'John Brown',
        crtTime: '2015-09-01 09:12',
        opinionLevel: '紧急',
        opinionState: 'DO',
        opinionContent: 'New York No. 1 Lake Park',
        doContent: '',
        doUser: '',
        doTime: ''
    },
    {
        key: '2',
        opinionSource: '边界清单',
        crtUser: 'Jim Green',
        crtTime: '2015-09-01 09:12',
        opinionLevel: '一般',
        opinionState: 'RD',
        opinionContent: 'London No. 1 Lake Park',
        doContent: 'fix bug',
        doUser: '张三',
        doTime: '2015-09-01 09:20'
    },
    {
        key: '3',
        opinionSource: '取消边界清单',
        crtUser: 'Joe Black',
        crtTime: '2015-09-01 09:12',
        opinionLevel: '一般',
        opinionState: 'CK',
        opinionContent: 'Sidney No. 1 Lake Park',
        doContent: '',
        doUser: '',
        doTime: ''
    },
]

const Header = () => {
    return (
        <Button type="primary">导出全部</Button>
    )
}

const checkOpinion = () => {

    return (
        <>

            <Table
                title={Header}
                columns={columns}
                dataSource={data}
            />
        </>
    )
}
export default checkOpinion