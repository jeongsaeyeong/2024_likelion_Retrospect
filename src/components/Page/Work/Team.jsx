import React from 'react'
import NextBtn from '../../../assets/img/Next.svg'
import { Link } from 'react-router-dom'

const Team = ({ click }) => {
    const list = ['수정대동제', 'PoPo', '친환경어쩌고', 'Project Title', 'Project Title', 'Project Title']

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