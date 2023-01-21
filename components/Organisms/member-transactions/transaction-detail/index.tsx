// @flow 
import * as React from 'react';
import { DetailGame } from './DetailGame';
import { PurchaseDetail } from './PurchaseDetail';
import { PaymentInformation } from './PaymentInformation';
import { ConfirmAdmin } from './ConfirmAdmin';
type Props = {

};
export const TransactionDetailComponent = (props: Props) => {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                    Details #GG001
                </h2>
                <div className="details">
                    <div className="main-content main-content-card overflow-auto">
                        <section className="checkout mx-auto">

                            {/* Detail Game */}
                            <DetailGame />

                            <hr />

                            {/* Purchase Detail */}
                            <PurchaseDetail />

                            {/* Payment Informations */}
                            <PaymentInformation />

                            {/* Button go to whatsapp admin */}
                            <ConfirmAdmin />
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};