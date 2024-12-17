import React, { useState } from 'react'
import "../css/ListLeft.css"
import { MdOutlineHome } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { LuSquareUser } from "react-icons/lu";
import { RiExchangeLine } from "react-icons/ri";
import { Divider, Menu, Switch } from 'antd';

const items = [
    {
        key: '1',
        icon: < MdOutlineHome className='iconMenuLeft' />
    },
    {
        key: '2',
        icon: <FaFacebookMessenger className='iconMenuLeft' />
    },
    {
        key: '3',
        icon: <FaUsers className='iconMenuLeft' />
    },
    {
        key: '4',
        icon: <LuSquareUser className='iconMenuLeft' />
    },
    {
        key: '5',
        icon: <RiExchangeLine className='iconMenuLeft' />
    },
    {
        key: '6',
        icon: <LuWallet className='iconMenuLeft' />
    },
]
const setting = {
    key: 'sub1',
    icon:
        <img src='https://app.dem.chat/static/media/logo.0f1b8d53f711303c4fe8.png' style={{
            width: '45px',
            height: '45px',

        }} />,
    children: [
        { key: '7', label: 'Tài Khoản' },
        { key: '8', label: 'Cài Đặt' },
        { key: '9', label: 'Chế Độ Tối' },
        { key: '10', label: 'Ngôn Ngữ' },
        { key: '11', label: 'Khóa An Toàn' },
        { key: '12', label: 'Đăng Xuất' },
    ],
}
export default function ListLeft() {
    const [selectedKey, setSelectedKey] = useState(null);

    return (
        <div className="sidebar">
            <Menu
                defaultSelectedKeys={['1']}
                mode="vertical"
                style={{
                    height: '100%',
                    borderRight: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgb(12, 74, 110)',
                }}
            >
                {items.map(item => (
                    <Menu.Item key={item.key}
                        style={{
                            background: selectedKey === item.key ? 'rgb(12, 74, 110)' : 'transparent', // Màu nền khi được chọn
                            color: '#FFFFFF' // Màu văn bản
                        }}>
                        {item.icon}
                    </Menu.Item>
                ))}
                <Menu.SubMenu key={setting.key} icon={setting.icon} title={<span>Cài Đặt</span>}>
                    {setting.children.map(child => (
                        <Menu.Item key={child.key}>{child.label}</Menu.Item>
                    ))}
                </Menu.SubMenu>
            </Menu>
        </div>

    )
}
