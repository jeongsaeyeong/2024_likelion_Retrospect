import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Star from '../../assets/img/Star.svg';
import Close from '../../assets/img/Close.svg';
import { Link } from 'react-router-dom';

const Nav = ({ setShow }) => {
    const [isClosed, setIsClosed] = useState(false);

    const navVariants = {
        hidden: { x: '100%', transition: { ease: "easeOut", duration: 0.5 } },
        visible: { x: 0, transition: { ease: "easeOut", duration: 0.5 } },
        exit: { x: '100%', transition: { ease: "easeOut", duration: 0.5 } },
    };

    const backVariants = {
        hidden: { opacity: 0, transition: { ease: "easeOut", duration: 0.5 } },
        visible: { opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
        exit: { opacity: 0, transition: { ease: "easeOut", duration: 0.5 } },
    };

    const handleClose = () => {
        setIsClosed(true);
        setTimeout(() => {
            setShow(false);
        }, 1000);
    };

    return (
        <>
            <motion.div
                className='Nav_wrap container'
                initial="hidden"
                animate={isClosed ? "exit" : "visible"} // Trigger the exit animation if closed
                variants={navVariants}
                key="nav"
            >
                <div className="header">
                    <img
                        onClick={handleClose}
                        className='closebtn'
                        src={Close}
                        alt="Close button"
                    />
                </div>
                <div className="main">
                    <Link onClick={handleClose} to='/About'>About</Link>
                    <Link onClick={handleClose} to='/retro'>Retrospection</Link>
                    <Link onClick={handleClose} to='/works'>Works</Link>
                    <Link onClick={handleClose} to='/people'>People</Link>
                </div>
                <img className='star' src={Star} alt="star" />
            </motion.div>
            <motion.div
                className='Background container'
                initial="hidden"
                animate={isClosed ? "exit" : "visible"} // Trigger the exit animation if closed
                variants={backVariants}
                key="nav"
            ></motion.div>
        </>
    );
};

export default Nav;
