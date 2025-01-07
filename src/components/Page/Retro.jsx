import React, { useState } from 'react'
import Header from '../Section/Header'
import PMBin from '../../assets/img/Pm_bin.svg'
import PMFull from '../../assets/img/Pm_full.svg'
import FrontBin from '../../assets/img/Front_bin.svg'
import FrontFull from '../../assets/img/Front_full.svg'
import BackBin from '../../assets/img/Back_bin.svg'
import BackFull from '../../assets/img/Back_full.svg'

const Retro = () => {
    const [click, setClick] = useState('PMFull');
    const list = [
        { title: '권하영  (기획*디자인 파트장 / 서비스디자인공학과)', say: '2025 안녕~~' },
        { title: '송지연 (기획*디자인 운영진 / 서비스디자인공학과)', say: '수고햇읍니다다들수고햇수링수링' }
    ]

    return (
        <div className='Retro_wrap container'>
            <Header page='Retrospection' />
            <div className="retro_main">
                <div className="img_box">
                    <img onClick={() => { setClick('PMFull') }} src={click === 'PMFull' ? PMFull : PMBin} alt="" />
                    <img onClick={() => { setClick('FrontFull') }} src={click === 'FrontFull' ? FrontFull : FrontBin} alt="" />
                    <img onClick={() => { setClick('BackFull') }} src={click === 'BackFull' ? BackFull : BackBin} alt="" />
                </div>
                <div className="list_wrap">
                    {list.map((item, key) => (
                        <div className={`list ${key === list.length - 1 ? 'last' : ''}`} key={key}>
                            <h4>{item.title}</h4>
                            <p>{item.say}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Retro