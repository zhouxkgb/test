import React, { useState } from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs

const tabs = [
    {
        key: 'eqlist',
        tab: '设备清单',
        component: <p>设备清单内容</p>
    },
    {
        key: 'eqBorder',
        tab: '边界清单',
        component: <p>边界清单内容</p>,
    },
    {
        key: 'eqCancel',
        tab: '取消边界清单',
        component: <p>取消边界清单内容</p>
    },
]

const lists = () => {
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