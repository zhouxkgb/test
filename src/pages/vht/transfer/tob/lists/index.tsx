import React, { useState } from 'react'
import { Tabs } from 'antd'
import EqBorder from './eqBorder'
import EqCancel from './eqCancel'
import EqList from './eqList'

const { TabPane } = Tabs

const lists = () => {
    const tabs = [
        {
            key: 'eqlist',
            tab: '设备清单',
            component: <EqList />
        },
        {
            key: 'eqBorder',
            tab: '边界清单',
            component: <EqBorder />,
        },
        {
            key: 'eqCancel',
            tab: '取消边界清单',
            component: <EqCancel />
        },
    ]
    const [activeTabKey, setActiveTabKey] = useState(tabs[0]?.key)

    return (
        <Tabs
            tabPosition="left"
            activeKey={activeTabKey}
            onChange={(active) => setActiveTabKey(active)}
        >
            {
                tabs.map((item) =>
                    <TabPane tab={item.tab} key={item.key}>
                        {item.component}
                    </TabPane>
                )
            }
        </Tabs>
    )
}
export default lists