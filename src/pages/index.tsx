import FooterComp from "components/FooterComp";
import GalleryComp from "components/Gallery";
import HeaderComp from "components/HeaderComp";
import IntroComp from "components/Intro";
import React from "react";
import Slide from "react-reveal/Slide";
import styled from "styled-components";

const HomePage: React.FC = () => {
  return (
    <div id="home">
      <div className="banner">
        <div className="overlay">
          <HeaderComp />

          <div className="container">
            <div className="overlay-inner">
              <div className="wrapper">
                <Slide left>
                  <h1 className="banner-display ">
                    WELCOME TO <br />
                    LOVE REVIVAL
                  </h1>
                  <div className="">
                    <button className="btn btn-grad">Learn More</button>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="intro">
            <div className="my-5">
              <div className="section-title">
                <div className="line"></div>
                <p> What We Do</p>
                <div className="line"></div>
              </div>
              <IntroComp />
            </div>
            <div className="aim my-5">
              <div className="bg-primary text-light p-3 text-center">
                <p>
                  This arm focuses on spiritual awakening of the love of God in
                  the lives of youths in our community (keeping oneself
                  unspotted from the world). It is a night or evening of worship
                  and a brief word of love.
                </p>
                <p>
                  We partner with youth minisrty churches, having volunteers who
                  serve either in the choir, technical, media / ICT, ushering,
                  publicity, security, e.t.c to bring the event to pass.
                  However, as the souls we invited encounter God in worship and
                  give their life to Christ, we direct them to the churches we
                  partner with for their spiritual growth while we enroll them
                  into our Love Reform Program for their social change and
                  integration back to society
                </p>
              </div>

              <div>
                <img src="/images/affy.png" alt="" />
              </div>
            </div>
            <div className="pattern1 d-none d-md-block"></div>
            <div className="pattern2 d-none d-md-block"></div>

            <div className="my-5">
              <div className="mt-5 video1">
                <img
                  src="/images/najite.png"
                  className="mt-5"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </div>

          <GalleryComp />

          <div className="team">
            <div className="section-title">
              <div className="line"></div>
              <p>Meet the team</p>
              <div className="line"></div>
            </div>

            <p className="mt-4 mb-2 text-center">The Board</p>

            <div className="grid-3 board-members">
              {teamImages.map((team, i) => (
                <BoardMember team={team} key={i} />
              ))}
            </div>

            <div className="podcast">
              <div className="container bg-primary p-4">
                <div className="podcast-wrapper">
                  <div className="item d-flex align-items-center">
                    <img loading="lazy" src="/images/microphone.svg" alt="" />
                    <div className="left">
                      <p className="mb-1">
                        Listen to our <br /> live Podcast
                      </p>
                      <button className="btn btn-sm btn-grad">
                        Click Here
                      </button>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="item d-flex align-items-center">
                    <img loading="lazy" src="/images/monitor.svg" alt="" />
                    <div className="left ml-3">
                      <p className="mb-1">
                        Watch us on <br /> Youtube
                      </p>
                      <button className="btn btn-sm btn-grad">
                        Click Here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterComp />
    </div>
  );
};

export default HomePage;

const BoardMember = ({ team }: { team: ITeam }): JSX.Element => {
  return (
    <Wrapper>
      <div className="grid-item">
        <img loading="lazy" src={team.image} alt={team.name} />
        <p className="mt-2 font-weight-bold">{team.name}</p>

        <div className="biocard">
          <div className="inner bg-primary">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              iure magnam dolorem vel cumque nulla officia quaerat enim
              explicabo odio? Quia, odio facilis. Quis esse laudantium
              aspernatur dolores nobis dolorem!
            </p>
            <div className="outter"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

interface ITeam {
  name: string;
  image: string;
  bio: string;
}

const teamImages: ITeam[] = [
  { name: "Jane Doe", image: "/images/pic7.png", bio: "A little bio about me" },
  {
    name: "Uncle Lopez",
    image: "/images/pic8.png",
    bio: "A little bio about them",
  },
  {
    name: "Janny Doe",
    image: "/images/pic9.png",
    bio: "A little bio about them",
  },
  {
    name: "Lady Lopez",
    image: "/images/pic10.png",
    bio: "A little bio about them",
  },
  { name: "MD", image: "/images/pic11.png", bio: "A little bio about them" },
  {
    name: "John Doe",
    image: "/images/pic12.png",
    bio: "A little bio about them",
  },
  {
    name: "Half Image",
    image: "/images/pic13.png",
    bio: "A little bio about them",
  },
  {
    name: "Empty 1",
    image: "/images/placeholder-circle.png",
    bio: "A little bio about them",
  },
  {
    name: "Empty 2",
    image: "/images/placeholder-circle.png",
    bio: "A little bio about them",
  },
];

const intro = [
  {
    image: "/images/intro-1.png",
    name: "Miss Chituru Okwu, Love Revival Cordinator",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor
  orci gravida dui tristique, eget gravida diam ullamcorper. Morbi
  interdum ipsum turpis. Quisque pellentesque dolor id nunc
  condimentum volutpat. Phasellus vehicula libero dolor, sed laoreet
  enim volutpat non. Aenean non aliquet elit. Lorem ipsum dolor sit
  amet, consectetur adipiscing elit. Donec diam nibh, egestas varius
  elementum eu, accumsan quis elit. Mauris varius lobortis sem, eu
  porta augue interdum in. Curabitur lobortis dolor quis nibh
  ultricies, a pellentesque ipsum placerat.`,
  },
  {
    image: "/images/pic11.png",
    name: "Mr Chika Elvis, Love Revival Cordinator",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor orci gravida dui tristique, eget gravida diam ullamcorper. Morbi interdum ipsum turpis. Quisque pellentesque dolor id nunc condimentum volutpat. Phasellus vehicula libero dolor, sed laoreet enim volutpat non. Aenean non aliquet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nibh, egestas varius elementum eu, accumsan quis elit. Mauris varius lobortis sem, eu porta augue interdum in. Curabitur lobortis dolor quis nibh ultricies, a pellentesque ipsum placerat.

    `,
  },
];
