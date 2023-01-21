// @flow
import * as React from "react";
import Image from "next/image";
import { FormSignUp } from "../components/Organisms/authentication/sign-up";

export default function SignUp() {
  return (
    // <!-- Sign Up -->
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        {/* Form sign up */}
        <FormSignUp />
      </div>
    </section>
  );
}
