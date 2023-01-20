// @flow 
import * as React from 'react';
import { StepComponent } from './StepComponent';
type Props = {

};
export default function Feature() {
    return (
        <section id="feature" className="feature pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
                    It’s Really That
                    <br /> Easy to Win the Game
                </h2>
                <div className="row gap-lg-0 gap-4" data-aos="fade-up">
                    <StepComponent img={"assets/icon/step1.svg"} title={"1. Start"} desc={"Pilih salah satu game yang ingin kamu top up"} />
                    <StepComponent img={"assets/icon/step2.svg"} title={"2. Fill Up"} desc={"Top up sesuai dengan nominal yang sudah tersedia"} />
                    <StepComponent img={"assets/icon/step3.svg"} title={"3. Be a Winner"} desc={"Siap digunakan untuk improve permainan kamu"} />
                </div>
            </div>
        </section>
    );
};