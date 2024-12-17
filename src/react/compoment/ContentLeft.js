import React, { useState } from 'react'
import "../css/ContentLeft.css"
import { FaRegNewspaper } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { Button, Modal, Menu } from 'antd';
const items = [
    {
        key: '1',
        icon: <FaRegNewspaper className='iconContentLeft' />,
        label: 'Trang Chu',

    },
    {
        key: '2',
        icon: <FaRegUserCircle className='iconContentLeft' />,
        label: 'Trang cá nhân',

    },
]

export default function ContentLeft() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenGroupMy, setModalOpenGroupMy] = useState(false);

    const showModalMy = () => {
        setModalOpenGroupMy(true);
    };

    const handleOkMy = () => {
        setModalOpenGroupMy(false);
    };

    const handleCancelMy = () => {
        setModalOpenGroupMy(false);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [selectedKey, setSelectedKey] = useState(null);


    return (
        <div className='boxContent'>
            <Menu
                selectedKeys={['2']}
                mode="vertical"
                style={{
                    background: 'linear-gradient(to right, #ff7e00, #d5006d)',
                }}
            >
                {items.map(item => (
                    <Menu.Item key={item.key}
                        style={{
                            background: selectedKey === item.key ? 'linear-gradient(to right, #ff7e00, #d5006d)' : 'transparent', // Màu nền khi được chọn
                            color: selectedKey === item.key ? '#FFFFFF' : '#FFFFFF', // Màu văn bản
                        }}>
                        <span className='ml-3'>{item.icon}</span>
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu>
            <hr />
            <div className='w-full'>
                <div className='d-flex justify-content-between align-items-center mb-2 '>
                    <div className='fw-bold uppercase'>NHÓM CỦA BẠN</div>
                    <div onClick={showModalMy}>
                        <div className='font-semibold d-flex justify-content-between align-items-center underline-on-hover'>Xem tất cả <IoMdArrowDropright /></div>
                    </div>
                </div>
                <div className='d-flex align-items-center mb-2 box-shadow'>
                    <img className='imgContentLeft' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s'></img>
                    <div className='mx-2 font-semibold'>Tên nhóm</div>
                </div>
            </div>
            <hr />
            <div className='w-full'>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <div className='fw-bold uppercase'>NHÓM ĐỀ XUẤT</div>
                    <span onClick={showModal}>
                        <div className='font-semibold d-flex justify-content-between align-items-center underline-on-hover'>Xem tất cả <IoMdArrowDropright /></div>
                    </span>
                </div>
                <div className='nameGroupLeft'>
                    <div className='d-flex justify-content-between align-items-center mb-2 box-shadow'>
                        <div className='d-flex align-items-center'>
                            <img className='imgContentLeft' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s'></img>
                            <div className='mx-2 font-semibold'>Tên nhóm</div>
                        </div>
                        <div>
                            <button className='btn btn-danger'>Tham gia</button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-2 box-shadow'>
                        <div className='d-flex align-items-center'>
                            <img className='imgContentLeft' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s'></img>
                            <div className='mx-2 font-semibold'>Tên nhóm</div>
                        </div>
                        <div>
                            <button className='btn btn-danger'>Tham gia</button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-2 box-shadow'>
                        <div className='d-flex align-items-center'>
                            <img className='imgContentLeft' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s'></img>
                            <div className='mx-2 font-semibold'>Tên nhóm</div>
                        </div>
                        <div>
                            <button className='btn btn-danger'>Tham gia</button>
                        </div>
                    </div>
                </div>
            </div>
            <>
                <Modal title="Nhóm của bạn" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                    footer={[
                    ]}
                    maskClosable={true}
                    keyboard={true}
                >
                    <div className='d-flex justify-content-between align-items-center mb-2 box-shadow'>
                        <div className='d-flex align-items-center'>
                            <img className='imgContentLeft' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s'></img>
                            <div className='mx-2 font-semibold'>Tên nhóm</div>
                        </div>
                        <div>
                            <button className='btn btn-danger'>Tham gia</button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-2 box-shadow'>
                        <div className='d-flex align-items-center'>
                            <img className='imgContentLeft' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s'></img>
                            <div className='mx-2 font-semibold'>Tên nhóm</div>
                        </div>
                        <div>
                            <button className='btn btn-danger'>Tham gia</button>
                        </div>
                    </div>
                </Modal>

            </>
            <>
                <Modal title="Nhóm đề xuất" open={isModalOpenGroupMy} onOk={handleOkMy} onCancel={handleCancelMy}
                    footer={[
                    ]}
                    maskClosable={true}
                    keyboard={true}
                >
                    <div className='d-flex justify-content-between align-items-center mb-2 box-shadow'>
                        <div className='d-flex align-items-center'>
                            <img className='imgContentLeft' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s'></img>
                            <div className='mx-2 font-semibold'>Tên nhóm</div>
                        </div>
                        <div>
                            <button className='btn btn-danger'>Tham gia</button>
                        </div>
                    </div>
                </Modal>

            </>


        </div >

    )
}
