// @flow
import * as React from "react";
import Image from "next/image";
import { SignUpPhotoSuccessComponent } from "../components/Organisms/authentication/sign-up/sign-up-photo-success";
import { SignUpSuccessComponent } from "../components/Organisms/authentication/sign-up/sign-up-success";

export default function SignUpSuccess() {
  return (
    // <!-- Sign Up Success -->
    <section className="sign-up-success mx-auto pt-md-179 pb-md-179 pt-150 pb-100">
      {/* Component */}
      <SignUpSuccessComponent/>
    </section>
  );
}
