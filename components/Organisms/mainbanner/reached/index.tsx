// @flow 
import * as React from 'react';
import DataCount from './DataCount';
type Props = {

};
export default function Reached() {
    return (
        <section className="reached pt-50 pb-50">
            <div className="container-fluid">
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                    <DataCount count='290M+' title='Players Top Up' className="me-lg-35" />

                    <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                    <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>

                    <DataCount count='12.500' title='Games Available' className="me-lg-35 ms-lg-35" />

                    <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                    <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>

                    <DataCount count='99,9%' title='Happy Players' className="me-lg-35 ms-lg-35" />

                    <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                    <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>

                    <DataCount count='4.7' title='Rating Worldwide' className="me-lg-35 ms-lg-35" />
                </div>
            </div>
        </section>
    );
};