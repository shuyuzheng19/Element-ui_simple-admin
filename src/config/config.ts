
/**=======================侧边栏配置信息=======================**/

type SideMenuConfig={
    //侧边栏背景颜色
    backgroundColor:string
    //侧边栏字体颜色
    textColor:string
    //侧边栏选中颜色
    activeColor:string
}

type SideBarConfig={
    //默认选择导航栏
    activeMenu:string
    //侧边栏外观相关配置
    menuConfig:SideMenuConfig,
    //侧边栏导航相关配置
    menuData:Menu[]
}


type Menu = {
    //菜单index
    index:string
    //菜单标题
    title:string,
    //菜单图标 这里使用font-awesome 只需要填写图标名称就OK了
    icon:string,
    //跳转路径
    path:string|undefined
    //是否是嵌套标题,
    groups:MenuGroupItem[]|undefined,
}

type MenuGroupItem={
    //嵌套index
    index:string,
    //嵌套图标
    icon:string,
    //嵌套的标题
    title:string,
    //嵌套的跳转路径
    path:string,
}


//侧边栏配置信息
export const defaultSideBarConfig:SideBarConfig={
    activeMenu:"",
    menuConfig:{
        activeColor:"#ffd04b",
        backgroundColor:"#545c64",
        textColor:"#fff"
    },
    menuData:[
        {
            index: "1",
            icon: "fa-address-book",
            title: "这是导航栏一",
            path: undefined,
            groups: [
            {
                icon: "fa-address-book",
                index: "1-1",
                path: "/index/1",
                title: "子系标题1"
            },
            {
                icon: "fa-address-book",
                index: "1-2",
                path: "/index/2",
                title: "子系标题2"
            },
            ]
        },
        {
            index: "2",
            icon: "fa-address-book",
            title: "这是导航二",
            path: "/index2",
            groups: undefined
        },
        {
            index: "3",
            icon: "fa-address-book",
            title: "这是导航三",
            path: "/index3",
            groups: undefined
        },

    ]
}

