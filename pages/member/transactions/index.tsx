// @flow
import * as React from "react";
import { MemberTransactionComponent } from "../../../components/Organisms/member-transactions";
type Props = {};
export default function Transactions() {
  return (
    // <!-- Transactions -->
    <section className="transactions overflow-auto">
      <main className="main-wrapper">
        {/* Component */}
        <MemberTransactionComponent />
      </main>
    </section>
  );
}
