import React from 'react';
import Header from '../Section/Header';
import { peopleData } from '../Js/people'

const People = () => {

    return (
        <div className='People_wrap container'>
            <Header page='People' />
            {peopleData.map((group, index) => (
                <div key={index} className={`list ${index === peopleData.length - 1 ? 'last' : ''}`} >
                    <h3>{group.group}</h3>
                    {group.members.map((member, memberIndex) => (
                        <div key={memberIndex}>
                            <h4>{member.name}</h4>
                            <p>{member.role} / {member.team} / {member.department}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default People;
