import FooterComp from "components/FooterComp";
import HeaderComp from "components/HeaderComp";
import Head from "next/head";
import React, { Fragment } from "react";
import Slide from "react-reveal/Slide";

const PartenerPage: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>Partner with LVF</title>
        <meta name="description" content="Partner with Us" />
      </Head>
      <div className="connect-banner">
        <div className="overlay">
          <HeaderComp />
          <div className="container">
            <div className="overlay-inner">
              <div className="wrapper">
                <Slide left>
                  <div className="text-content text-center">
                    <h4 className="">Want to partner with us?</h4>
                    <p className="">
                      Send us a mail at
                      <a
                        className="ml-2 font-weight-bold text-light"
                        href="mailto:lovevisionfoundation@yahoo.co.uk"
                      >
                        lovevisionfoundation@yahoo.co.uk
                      </a>
                    </p>
                    <div className="mt-4">
                      or call us on
                      <a
                        className=" font-weight-bold text-inherit ml-2"
                        href="tel:+234 803 229 5378"
                      >
                        +234 803 229 5378
                      </a>
                    </div>

                    <h1 className="font-great mt-2">
                      We would love to hear from you!
                    </h1>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </Fragment>
  );
};

export default PartenerPage;
