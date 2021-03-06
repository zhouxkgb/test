import { MenuDataItem } from '@ant-design/pro-layout'
import { clearConfigParams } from '@/utils/config'

export type GlobalData = {
    name: string,
    title: string,
    menus: MenuDataItem[],
    [name: string]: unknown
}

/**
 * 检查路由权限
 * @returns boolean true 表示使用布局, false 表示不使用布局
 */
export const requestIgnoreList = () => [
    '/User/Login'
]

/**
 * 获取菜单信息
 */
export const requestGlobalData = async (): Promise<GlobalData> => ({
    name: '系统管理员',
    title: 'MS Template',
    menus: [
        {
            path: '/',
            name: '欢迎页面',
            children: [
                {
                    path: '/vht/transfer',
                    name: '移交接产',
                    children: [
                        {
                            path: '/vht/transfer/tob',
                            name: 'TOB移交',
                        },
                    ],
                },
            ],
        }
    ]
})

/**
 * 检查登入状态，用户是否登入
 */
export const checkLoginStatus = () => {
    if (localStorage.getItem('ms-token')) {
        return true
    }
    return false
}

/**
 * 清空配置的数据信息
 */
export const clearLoginStatus = () => {
    localStorage.clear()
    clearConfigParams()
}

export type Config = {
    // 菜单的布局方式
    layout: 'side' | 'top'| 'mix'
    // 导航的主题，side 和 mix 模式下是左侧菜单的主题，top 模式下是顶部菜单
    navTheme: 'light' | 'dark'
    // 顶部导航的主题，mix 模式生效
    headerTheme: 'light' | 'dark'
    // 标签页模式 
    tabs: 'single' | 'multi'
    // 主题的 Log
    logo: string
}

export const config: Config = {
    layout: 'side',
    navTheme: 'dark',
    headerTheme: 'dark',
    tabs: 'multi',
    logo: 'https://avatars.githubusercontent.com/u/91562499?s=200&v=4'
}