import React from 'react'
import Header from '../../Section/Header'
import NextBtn from '../../../assets/img/Next.svg'

const Work = () => {
    const workItems = [
        { title: "Hackerthon", description: "2024 멋사 중앙해커톤에서 만들어진 서비스들을 소개합니다." },
        { title: "Demo-Day", description: "성신 멋사 12기 데모데이에 공개된 서비스들을 소개합니다." },
        { title: "ETC", description: "그 외에 성신 멋사 12기가 제작한 서비스들을 소개합니다." }
    ];

    return (
        <div className="Work_wrap container">
            <Header page="Works" />
            <div className='work_main'>
                {workItems.map((item, index) => (
                    <div key={index}>
                        <div className="header">
                            <h4>{item.title}</h4>
                            <img src={NextBtn} alt="Next button" />
                        </div>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work