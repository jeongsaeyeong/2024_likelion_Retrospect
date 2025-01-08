import React, { useEffect, useState } from 'react';
import Header from '../../Section/Header';
import { useParams } from 'react-router-dom';
import { DemoDay, JungAng, ETC } from './work';

const Detail = () => {
    const [data, setData] = useState(null); 
    const params = useParams();

    useEffect(() => {
        const allProjects = [...DemoDay, ...JungAng, ...ETC];
        const projectData = allProjects.find((item) => item.name === params.detail);
        setData(projectData);
    }, [params.detail]);

    const groupContributorsByRole = (contributors) => {
        return contributors.reduce((groups, contributor) => {
            if (!groups[contributor.role]) {
                groups[contributor.role] = [];
            }
            groups[contributor.role].push(contributor);
            return groups;
        }, {});
    };

    return (
        <div className='Detail_wrap container'>
            <Header page="Works" />
            <div className="detail_main">
                {data ? (
                    <>
                        <div className="title">{data.name}</div>
                        <img src={data.img} alt={data.name} />
                        <div className="description">
                            <h4>서비스 소개</h4>
                            <p>{data.description}</p>
                        </div>
                        <div className="make">
                            <h4>만든 사람들</h4>
                            {Object.entries(groupContributorsByRole(data.contributors)).map(([role, contributors], index) => (
                                <p key={index} className={`make_people ${index === 0 ? 'top' : ''} ${index === data.contributors.length - 1 ? 'last' : ''}`}>
                                    <strong>{role}:</strong> {contributors.map(contributor => (
                                        <span key={contributor.name}>
                                            {contributor.name} ({contributor.department})
                                        </span>
                                    )).reduce((prev, curr) => [prev, ', ', curr])}
                                </p>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Detail;
