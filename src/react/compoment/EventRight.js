import React, { useState } from 'react'
import '../css/boxRight.css'
import { Button, Modal, Image } from 'antd';
import { IoMdArrowDropright } from "react-icons/io";

export default function EventRight() {
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
    return (
        <div className='boxRight p-3'>
            <div className='d-flex justify-content-between align-items-center mb-2 '>
                <div className='fw-bold uppercase'>Su Kien</div>
                <div onClick={showModalMy}>
                    <div className='font-semibold d-flex justify-content-between align-items-center underline-on-hover'>Xem tất cả <IoMdArrowDropright /></div>
                </div>
            </div>
            <div>
                <div>
                    <img className='imgRight' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s' />
                </div>
                <div className='p-3 bgRight'>
                    <div className='uppercase '>
                        <span className='fontColorRight'>Đang diễn ra</span>
                    </div>
                    <div>
                        <h5 className='textMaxShow3Dot'>Thử vận may của bạn với TrustKeys</h5>
                    </div>
                    <div>
                        <span className='textMaxShow80pxDot'>
                            Thử vận may của bạn với TrustKeys
                            Người dùng thực hiện các nhiệm vụ dưới đây để được nhận thêm nhiều lượt quay:
                            Xác thực số điện thoại
                            Thích, chia sẻ và bình luận bài viết này
                            Giới thiệu thêm bạn bè tạo tài khoản trên app TrustKeys
                            Nạp và thực hiện giao dịch trên sàn TrustKeys.
                            Hãy vào thử vận may của mình với TrustKeys nào!
                        </span>
                    </div>
                </div>
            </div>
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
