import React from 'react'
import Header from '../../Section/Header'
import { useParams } from 'react-router-dom'
import Sample from '../../../assets/img/project_sampleimg.png'

const Detail = () => {
    const params = useParams();

    return (
        <div className='Detail_wrap container'>
            <Header page="Works" />
            <div className="detail_main">
                <div className="title">{params.detail}</div>
                <img src={Sample} alt="sample img" />
                <div className="description">
                    <h4>서비스 소개</h4>
                    <p>2024년 수정대동제 공식 홈페이지 입니다.</p>
                </div>
                <div className="make">
                    <h4>만든 사람들</h4>
                    <p className='make_people top'><strong>PM*DE</strong> : 송지연(서디공)</p>
                    <p className='make_people'><strong>BE</strong> : 송지연(서디공), 김현수(컴공), 서지우(컴공)</p>
                    <p className='make_people last'><strong>FE</strong> : 우지윤(AI), 이현진(AI), 정새영(미컴)</p>
                </div>
            </div>
        </div>
    )
}

export default Detail