import React from 'react';
import './Home.css';
import Me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Ikram Choukhantri</h1>
                <span className="home__education">Elève ingénieure en Business Intelligence & Analytics</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contactez-moi</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home;
