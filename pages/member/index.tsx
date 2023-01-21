// @flow
import * as React from "react";
import { Sidebar } from "../../components/Organisms/member-sidebar";
import { MemberOverview } from "../../components/Organisms/member-overview";
type Props = {};
export default function Overview() {
  return (
    // <!-- Overview -->
    <section className="overview overflow-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Overview Member */}
      <MemberOverview />
    </section>
  );
}
