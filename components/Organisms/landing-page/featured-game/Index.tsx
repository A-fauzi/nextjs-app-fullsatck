// @flow 
import * as React from 'react';
import GameCard from './GameCard';
type Props = {

};
export default function FeaturedGame() {
    return (
        <section className="featured-game pt-50 pb-50">
            <div className="container-fluid">
                {/* Text */}
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                    Our Featured
                    <br /> Games This Year
                </h2>
                <div
                    className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                    data-aos="fade-up"
                >
                    {/* Game Card */}
                    <GameCard url='/detail' image='/assets/img/Thumbnail-1.png' title='Super Mechs' category='Mobile' />
                    <GameCard url='/detail' image='/assets/img/Thumbnail-2.png' title='Call Of Duty: Modern' category='Mobile' />
                    <GameCard url='/detail' image='/assets/img/Thumbnail-3.png' title='Mobile Legend' category='Mobile' />
                    <GameCard url='/detail' image='/assets/img/Thumbnail-4.png' title='Clash Of Clans' category='Mobile' />
                    <GameCard url='/detail' image='/assets/img/Thumbnail-5.png' title='Valorant' category='Dekstop' />
                </div>
            </div>
        </section>
    );
};