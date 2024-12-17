import React, { useState } from 'react'
import '../css/content.css'
import { BiWorld } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LiaCommentDots } from "react-icons/lia";
import { CiShare2 } from "react-icons/ci";

import { Typography, Button, Image } from 'antd';

const { Title, Paragraph } = Typography;

export default function Content() {
    const [expanded, setExpanded] = useState(false);

    const text = "Allez Labs has proposed a yield opportunity for Polygon PoS bridge funds. According to Morpho Labs co-founder Merlin Egalite, Polygon could collect a 7% yield on its stablecoin holdings at current rates. Allez Labs has submitted a pre-P ...";

    const displayedText = expanded ? text : `${text.substring(0, 100)}...`;
    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='contentBox'>
            <div className='d-flex justify-content-between align-items-center '>
                <div className='d-flex'>
                    <img className='avatarCreateContent' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s'></img>
                    <div>
                        <h3>Name</h3>
                        <span className='d-flex align-items-center'>11:30 giờ <BiWorld className='saicon' /></span>
                    </div>
                </div>
                <BsThreeDots />
            </div>
            <div className='relative '>
                <div>
                    <div style={{ maxWidth: '600px' }}>
                        <Paragraph>
                            {displayedText}
                            <Button type="link" onClick={handleToggle} style={{ padding: 0 }}>
                                {expanded ? "Ẩn" : "Xem thêm"}
                            </Button>
                        </Paragraph>
                    </div>
                    <Image style={{ objectFit: 'cover', maxHeight: 800 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s' />
                    <Image style={{ objectFit: 'cover', maxHeight: 800 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s' />
                    <Image style={{ objectFit: 'cover', maxHeight: 800 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s' />
                    <Image style={{ objectFit: 'cover', maxHeight: 800 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s' />
                    <Image style={{ objectFit: 'cover', maxHeight: 800 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s' />
                    <Image style={{ objectFit: 'cover', maxHeight: 800 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1BwedigZUBDcRQU_R307Nz2UtSggWxVecQ&s' />
                </div>
            </div>
            <div className='mt-5 pb-2'>
                <div className='d-flex flex-row text-gray-500 justify-content-between'>
                    <div></div>
                    <div className='d-flex'>
                        <div className='cursor-pointer '>
                            <span >20 Binh Luan</span>
                        </div>
                        <div className='cursor-pointer'>
                            <span>Chia Se</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='fBeMPz'><FaRegHeart /> Thich</div>
                    <div className='fBeMPz'><LiaCommentDots /> Binh luan</div>
                    <div className='fBeMPz'><CiShare2 />Chia se</div>
                </div>
            </div>
        </div >
    )
}
