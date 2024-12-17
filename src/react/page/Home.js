import React from 'react'
import Header from '../compoment/Header'
import ListLeft from '../compoment/ListLeft'
import ContentLeft from '../compoment/ContentLeft'
import CreateContent from '../compoment/CreateContent'
import Content from '../compoment/Content'
import EventRight from '../compoment/EventRight'
import SuggestFlowRight from '../compoment/SuggestFlowRight'

export default function Home() {
    return (
        <>
            <div className='d-flex bg-color'>
                <ListLeft></ListLeft>
                <div className='withHome'>
                    <Header></Header>
                    <div className='container-full'>
                        <div className='row'>
                            <div className='col-3'>
                                <ContentLeft />
                            </div>
                            <div className='col-6' style={{ paddingLeft: 2, paddingRight: 32 }}>
                                <CreateContent />
                                <Content />
                                <Content />
                                <Content />
                                <Content />

                            </div>
                            <div className='col-3' style={{ paddingLeft: 8, paddingRight: 30 }}>
                                <EventRight />
                                <SuggestFlowRight />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>


    )
}
