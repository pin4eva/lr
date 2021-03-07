import FooterComp from "components/FooterComp";
import HeaderComp from "components/HeaderComp";
import Head from "next/head";
import React, { Fragment } from "react";
import Slide from "react-reveal/Slide";

const JoinPage: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>Join US</title>
        <meta name="description" content="Join Us" />
      </Head>
      <div className="connect-banner">
        <div className="overlay">
          <HeaderComp />
          <div className="container">
            <div className="overlay-inner">
              <div className="wrapper">
                <Slide left>
                  <div className="text-content">
                    <h4 className="text-center">Want to reach out to us?</h4>
                    <p className="text-center">Send us a message</p>
                  </div>
                  <form>
                    <div className="d-md-flex form-group">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="form-control mb-2 transparent"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-control mb-2 transparent"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control transparent"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="form-control transparent"
                      />
                    </div>
                    <div className="d-md-flex form-group">
                      <select
                        placeholder="Occupation"
                        className="form-control mb-2 transparent"
                      >
                        <option>Clergy</option>
                        <option>Business</option>
                        <option>Others</option>
                      </select>
                      <select
                        placeholder="Occupation"
                        className="form-control mb-2 transparent"
                      >
                        <option value="">Age</option>
                        <option>18 - 25</option>
                        <option>26 - 30</option>
                        <option>30 and above</option>
                      </select>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-grad">Send</button>
                    </div>
                  </form>
                </Slide>
              </div>
            </div>
          </div>
        </div>
        <FooterComp />
      </div>
    </Fragment>
  );
};

export default JoinPage;
