import React, { useEffect, useState } from 'react'
import Header from '../../Section/Header'
import NextBtn from '../../../assets/img/Next.svg'
import Team from './Team';

const Work = () => {
    const [click, setClick] = useState({
        title: '',
        description: ''
    });
    const [back, setBack] = useState(true);

    const workItems = [
        { title: "Hackerthon", description: "2024 멋사 중앙해커톤에서 만들어진 서비스들을 소개합니다." },
        { title: "Demo-Day", description: "성신 멋사 12기 데모데이에 공개된 서비스들을 소개합니다." },
        { title: "ETC", description: "그 외에 성신 멋사 12기가 제작한 서비스들을 소개합니다." }
    ];

    useEffect(() => {
        if (!(click.title)) {
            setBack(false)
        } else {
            setBack(true)
        }
    }, [click])

    return (
        <div className="Work_wrap container">
            <Header page="Works" back={back} setClick={setClick} />
            <div className='work_main'>
                {click.title ? (<Team click={click} />) : (
                    <>
                        {workItems.map((item, index) => (
                            <div key={index} onClick={() => { setClick({ title: item.title, description: item.description }) }}>
                                <div className="header">
                                    <h4>{item.title}</h4>
                                    <img src={NextBtn} alt="Next button" />
                                </div>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Work