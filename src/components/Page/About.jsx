import React from 'react'
import Header from '../Section/Header'
import Photo from '../../assets/img/photo01.png'
import Activie1 from '../../assets/img/Activie1.svg'
import Activie2 from '../../assets/img/Activie2.svg'
import Activie3 from '../../assets/img/Activie3.svg'
import Activie4 from '../../assets/img/Activie4.svg'
import Activie5 from '../../assets/img/Activie5.svg'
import Activie6 from '../../assets/img/Activie6.svg'
import Activie7 from '../../assets/img/Activie7.svg'
import Activie8 from '../../assets/img/Activie8.svg'

const activities = [
    { src: Activie1, alt: 'Activie1', text: '파트별 스터디' },
    { src: Activie2, alt: 'Activie2', text: '중앙 아이디어톤' },
    { src: Activie3, alt: 'Activie3', text: '중앙 해커톤' },
    { src: Activie4, alt: 'Activie4', text: '2024 여기톤' },
    { src: Activie5, alt: 'Activie5', text: '연합 배포 세션' },
    { src: Activie6, alt: 'Activie6', text: '가을 MT' },
    { src: Activie7, alt: 'Activie7', text: '4호선톤' },
    { src: Activie8, alt: 'Activie8', text: '데모데이' }
];

const About = () => {
    return (
        <div className='About_wrap container'>
            <Header page='About' />
            <div className="main">
                <div className="top">
                    <h3>성신여대 멋쟁이사자처럼 12기</h3>
                    <p>
                        멋쟁이사자처럼은 현재는 국내외 121개 대학, 4천여 명이 활동하는<br />
                        국내 최대 규모의 IT 창업 동아리입니다.
                    </p>
                    <img src={Photo} alt="photo" />
                    <p className='bold'>2024년, 성신 멋사 12기는 다음과 같은 활동들을 진행 및 참가하였습니다!</p>
                </div>
                <div className="bottom">
                    {activities.map((activity, index) => (
                        <div key={index}>
                            <img src={activity.src} alt={activity.alt} />
                            <p>{activity.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer">
                <p>
                    2024년, 끝없이 빛났던 여러분의 열정이 모여<br />
                    성신여대 멋쟁이사자처럼 12기가 완성되었습니다.<br /><br />

                    앞으로도 끊임없이 빛날 아기사자들의 2025년을 응원합니다!<br />
                </p>
            </div>
        </div>
    )
}

export default About
