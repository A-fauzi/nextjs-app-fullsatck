// @flow
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Checkout } from "../components/Organisms/checkout";

export default function checkout() {
  return (
    // <!-- Checkout Content -->
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="#">
            <Image src={'assets/icon/logo.svg'} alt="logo" width={60} height={60} />
          </a>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        {/* Checkout item */}
        <Checkout />
      </div>
    </section>
  );
}
