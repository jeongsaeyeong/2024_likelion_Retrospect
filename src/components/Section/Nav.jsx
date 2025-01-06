import React from 'react'
import Star from '../../assets/img/Star.svg'
import Close from '../../assets/img/Close.svg'
import { Link } from 'react-router-dom'

const Nav = ({ setShow }) => {
    return (
        <div className='Nav_wrap container'>
            <div className="header">
                <img onClick={() => { setShow(false) }} className='closebtn' src={Close} alt="Close button" />
            </div>
            <div className="main">
                <Link onClick={() => { setShow(false) }} to='/About'>About</Link>
                <Link onClick={() => { setShow(false) }} to='/Retrospetcion'>Retrospetcion</Link>
                <Link onClick={() => { setShow(false) }} to='/Works'>Works</Link>
                <Link onClick={() => { setShow(false) }} to='/People'>People</Link>
            </div>
            <img className='star' src={Star} alt="star" />
        </div>
    )
}

export default Nav