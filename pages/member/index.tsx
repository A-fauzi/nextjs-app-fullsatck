// @flow
import * as React from "react";
import { Sidebar } from "../../components/sidebar";
import { MemberOverview } from "../../components/member-overview";
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
