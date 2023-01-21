// @flow
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { CompleteCheckoutComponent } from "../components/Organisms/complete-checkout";

export default function CompleteCheckout() {
  return (
    // <!-- Complete Checkout Content -->
    <section className="complete-checkout mx-auto pt-lg-145 pb-lg-145 pt-100 pb-80">
      {/* Complete Checkout */}
      <CompleteCheckoutComponent />
    </section>
  );
}
