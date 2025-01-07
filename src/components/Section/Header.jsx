import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Back from '../../assets/img/Back.svg'
import NavBtn from '../../assets/img/Nav.svg'
import Nav from './Nav'

const Header = ({ page, back, setClick }) => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const naviagtion = useNavigate();

    useEffect(() => {
        if (page) {
            setTitle(page);
        }
    }, [page]);

    const onBack = () => {
        naviagtion(-1)
    }

    return (
        <div className='Header_wrap'>
            {page ? (
                <>
                    <img src={Back} onClick={() => { back ? setClick({ title: '', description: '' }) : onBack() }} alt="Back button" />
                    <h1>{title}</h1>
                    <img onClick={() => { setShow(true) }} src={NavBtn} alt="Nav button" />
                </>
            ) : (
                <img onClick={() => { setShow(true) }} className='alone' src={NavBtn} alt="Nav button" />
            )}
            {show ? <Nav setShow={setShow} /> : <></>}
        </div>
    )
}

export default Header