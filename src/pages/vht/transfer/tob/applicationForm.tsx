import React from 'react'
import { Form, Input } from 'antd'

const applicationForm = () => {

    const [form] = Form.useForm()

    const formInfo = [
        {
            item: {
                label: '计划编号',
                name: 'planCode',
            },
            component: <Input disabled />
        }, {
            item: {
                label: '机组',
                name: 'unit',
            },
            component: <Input disabled />
        }
    ]


    return (
        <>
            <Form
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
            >
                {
                    formInfo.map((item, idx) => (
                        <Form.Item {...item} key={idx}>
                            {item.component}
                        </Form.Item>
                    ))
                }
            </Form>
        </>
    )
}
export default applicationForm