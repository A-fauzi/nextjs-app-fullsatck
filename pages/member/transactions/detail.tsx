// @flow
import * as React from "react";
import { TransactionDetailComponent } from "../../../components/Organisms/member-transactions/transaction-detail";
type Props = {};
export default function TransactionsDetail() {
  return (
    // <!-- Transactions Detail -->
    <section className="transactions-detail overflow-auto">
      {/* Transaction Detail Component */}
      <TransactionDetailComponent />
    </section>
  );
}
