import React, { useState } from 'react'
import { Tabs } from 'antd'
import VhtList from './lists'
import CheckOpinion from './checkOpinion'
import './list.less'

const { TabPane } = Tabs

const tabs = [
    {
        key: 'lists',
        tab: '清单',
        component: <VhtList />
    },
    {
        key: 'checkOpinion',
        tab: '审查意见',
        component: <CheckOpinion />,
    },
    {
        key: 'file',
        tab: '附件',
        component: <p>附件列表</p>
    },
]

const applicationList = () => {
    const [activeTabKey, setActiveTabKey] = useState(tabs[0]?.key)

    return (
        <Tabs
            activeKey={activeTabKey}
            centered

            type="card"
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
export default applicationList