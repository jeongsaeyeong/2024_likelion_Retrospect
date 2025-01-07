import React from 'react';
import Header from '../Section/Header';

const People = () => {
    const peopleData = [
        {
            group: "운영진",
            members: [
                { name: "김현수", role: "대표", team: "BE", department: "컴퓨터공학과" },
                { name: "박지현", role: "부대표", team: "FE", department: "소프트웨어공학과" }
            ]
        },
        {
            group: "기획디자인",
            members: [
                { name: "송민지", role: "파트장", team: "디자인", department: "시각디자인학과" },
                { name: "이지현", role: "운영진", team: "디자인", department: "산업디자인학과" }
            ]
        },
        {
            group: "프론트엔드",
            members: [
                { name: "홍길동", role: "팀원", team: "FE", department: "정보통신공학과" },
                { name: "김철수", role: "팀원", team: "FE", department: "컴퓨터공학과" }
            ]
        },
        {
            group: "백엔드",
            members: [
                { name: "이영희", role: "팀원", team: "BE", department: "소프트웨어공학과" },
                { name: "최수정", role: "팀원", team: "BE", department: "데이터공학과" }
            ]
        }
    ];

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
