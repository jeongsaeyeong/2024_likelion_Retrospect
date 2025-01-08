import React, { useEffect, useState } from 'react'
import NextBtn from '../../../assets/img/Next.svg'
import { Link } from 'react-router-dom'
import { DemoDay, JungAng, ETC } from './work'

const Team = ({ click }) => {
    const [list, setList] = useState([])

    useEffect(() => {
        if (click.title === 'Hackerthon') {
            const names = JungAng.map((item) => item.name);
            setList(names);
        } else if (click.title === 'Demo-Day'){
            const names = DemoDay.map((item) => item.name);
            setList(names);
        } else {
            const names = ETC.map((item) => item.name);
            setList(names);
        }
    }, [click]);

    return (
        <>
            <div>
                <div className="header">
                    <h4>{click.title}</h4>
                </div>
                <p>{click.description}</p>
            </div>
            <div className='list_wrap'>
                {list.map((list, key) => (
                    <Link to={`/works/${list}`}>
                        <div className="list" key={key}>
                            <h4>{list}</h4>
                            <img src={NextBtn} alt="Next button" />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Team