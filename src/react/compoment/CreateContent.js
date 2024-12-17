import React, { useState } from 'react'
import '../css/createContent.css'
import { Modal, Button, Select, Input } from 'antd';

const { TextArea } = Input;

export default function CreateContent() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onChange = (e) => {
        console.log(e);
    };

    return (
        <div className='createContent'>
            <div className='d-flex p-3'>
                <img className='avatarCreateContent' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s' />
                <input onClick={showModal} type="text" class="form-control" id="formGroupExampleInput" placeholder="Bạn đang nghĩ gì thế?" />
            </div>
            <Modal title="Tạo bài viết" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                footer={[
                    <Button className='widthCreateContent' key="submit" type="primary" onClick={handleOk} >
                        Đăng
                    </Button>,]
                }
                maskClosable={true}
                keyboard={true}
            >
                <hr />
                <div className='d-flex text-center gap-x-2 mb-3 ' >
                    <img className='avatarCreateContent' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s'></img>
                    <div className='d-flex flex-column align-items-start gap-y-1'>
                        <h3 className='text-crateContent font-bold'>Namee</h3>
                        <Select
                            labelInValue
                            defaultValue={{
                                value: 'public',
                                label: '🌐 Công khai',
                            }}
                            style={{
                                width: 130,
                            }}
                            options={[
                                {
                                    value: 'public',
                                    label: '🌐 Công khai',
                                },
                                {
                                    value: 'preive',
                                    label: '🔒 Riêng tư',
                                },
                            ]}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <TextArea placeholder="Bạn đang nghĩ gì thế" allowClear onChange={onChange} />
                        <div className='d-flex gap-1' >

                        </div>
                    </div>
                </div>
            </Modal >
        </div >

    )
}
