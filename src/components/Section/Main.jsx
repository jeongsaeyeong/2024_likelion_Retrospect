import React from 'react'
import Header from './Header'
import MainImg from '../../assets/img/MainView.png'

const Main = () => {
    return (
        <div className='Main_wrap container'>
            <Header />
            <div className="main">
                <div className="top">
                    <p>LIKELION SSWU 12th</p>
                    <h1>Endless Sparks</h1>
                </div>
                <img src={MainImg} alt="MainImg" />
            </div>
            <p className="footer">Copyright 2024. likelion SSWU 12th. All rights reserved.</p>
        </div>
    )
}

export default Main