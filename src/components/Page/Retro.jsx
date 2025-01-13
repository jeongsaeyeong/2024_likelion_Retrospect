import React, { useState } from 'react'
import Header from '../Section/Header'
import PMBin from '../../assets/img/Pm_bin.svg'
import PMFull from '../../assets/img/Pm_full.svg'
import FrontBin from '../../assets/img/Front_bin.svg'
import FrontFull from '../../assets/img/Front_full.svg'
import BackBin from '../../assets/img/Back_bin.svg'
import BackFull from '../../assets/img/Back_full.svg'
import { PMlist, FElist, BElist } from '../Js/retro'

const Retro = () => {
    const [click, setClick] = useState('PMFull');

    // 조건부로 list를 설정
    const list = click === 'PMFull' ? PMlist : click === 'FrontFull' ? FElist : BElist;

    return (
        <div className='Retro_wrap container'>
            <Header page='Retrospection' />
            <div className="retro_main">
                <div className="img_box">
                    <img
                        onClick={() => setClick('PMFull')}
                        src={click === 'PMFull' ? PMFull : PMBin}
                        alt="PM"
                    />
                    <img
                        onClick={() => setClick('FrontFull')}
                        src={click === 'FrontFull' ? FrontFull : FrontBin}
                        alt="Frontend"
                    />
                    <img
                        onClick={() => setClick('BackFull')}
                        src={click === 'BackFull' ? BackFull : BackBin}
                        alt="Backend"
                    />
                </div>
                <div className="list_wrap">
                    {list.map((item, key) => (
                        <div className={`list ${key === list.length - 1 ? 'last' : ''}`} key={key}>
                            <h4>{item.title}</h4>
                            <p>
                                {item.say.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Retro;
