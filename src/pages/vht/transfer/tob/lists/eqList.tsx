import React, { } from 'react'
import { Button, Table, Divider, Tooltip } from 'antd'
import { EditOutlined, DeleteOutlined, } from '@ant-design/icons';

interface Record {
    eqCode: string,
    eqName: string,
    eqLocation: string,
    eqOnSiteState: string,
    remark: string
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
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text: string) => (
            <>
                <Tooltip title="修改"><EditOutlined onClick={() => { console.log(`jump to ${text}.`) }} /></Tooltip>
                <Divider type="vertical" />
                <Tooltip title="删除"><DeleteOutlined onClick={() => { console.log(`jump to ${text}.`) }} /></Tooltip>
            </>
        ),
    },
    {
        title: '设备编码',
        dataIndex: 'eqCode',
        key: 'eqCode',
        render: (text: string) => <a onClick={() => { console.log(`jump to ${text}.`) }}>{text}</a>
    },
    {
        title: '设备名称',
        dataIndex: 'eqName',
        key: 'eqName',
    },
    {
        title: '设备位置',
        key: 'eqLocation',
        dataIndex: 'eqLocation',
    },
    {
        title: '设备挂牌状态',
        key: 'eqOnSiteState',
        dataIndex: 'eqOnSiteState',
    },
    {
        title: '备注',
        key: 'remark',
        dataIndex: 'remark',
    },
]

// 表格数据
const data = [
    {
        key: '1',
        eqCode: '0EAQ221JA',
        eqName: '备用开关',
        eqOnSiteState: 'LD断开/上锁',
        eqLocation: '0T105',
        remark: '上游边界',
    },
    {
        key: '2',
        eqCode: '0EAQ262JA',
        eqName: '备用开关',
        eqOnSiteState: 'LD断开/上锁',
        eqLocation: '0T105',
        remark: '下游边界',
    },
    {
        key: '3',
        eqCode: '0EAQ245JA',
        eqName: '备用开关',
        eqOnSiteState: 'LD断开/上锁',
        eqLocation: '0T105',
        remark: '下游边界',
    },
]

const handleClickAdd = () => {
    return null
}

const Header = () => {
    return (
        <>
            <Button>导出全部</Button>
            <Button>下载模板</Button>
            <Button type="primary" onClick={() => { handleClickAdd() }}>新增</Button>
            <Button>导入</Button>
            <Button>批量删除</Button>
        </>
    )
}

/**
 * 设备清单
 * @returns 
 */
const eqList = () => {

    return (
        <>

            <Table
                title={Header}
                columns={columns}
                dataSource={data}
                rowSelection={{}}
            />
        </>
    )
}
export default eqList