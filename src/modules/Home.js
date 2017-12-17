import React from 'react';
import Badge from 'reactstrap/lib/Badge';
import Progress from 'reactstrap/lib/Progress';
import { Logos } from './Animated';

const Home = () => {
    return (
        <div>
            <div className="mainJumbo mb-0 fluid" />
            <Progress color="info" value="100" style={{ height: '8px' }} />
            <a href="/">
                <div className="d-flex justify-content-center">
                    <Badge className="logo-badge-div" color="dark" pill>
                        <div className="p-3">
                            <div className="d-flex-col justify-content-center align-items-center">
                                <h1 className="title-name">Matt Thompson</h1>
                                <h1 className="title">3WireBuild</h1>
                            </div>
                            <div className="d-flex row justify-content-center subtitle">
                                <p className="pt-2">
                                    Designer &bull; Developer &bull; Builder
                                </p>
                            </div>
                        </div>
                    </Badge>
                </div>
            </a>
            <div className="container main-container">
                <div className="main-container-flex">
                    <div>
                        <h1>About The Person</h1>
                        <Logos />
                        <p className="aboutText">
                            To describe myself in one word, I am a{' '}
                            <b>builder</b>.
                            <br />
                            <br />
                            Currently residing in Louisville, KY with my wife
                            Emily, I am Software Developer, a Craftsman, a
                            &ldquo;Do-It-Yourselfer&rdquo;, and Adventuring
                            Thinker. Driven by curiosity, I continue to
                            experiment and push limits. The process and research
                            keep me motivated as I press forward.
                            <br />
                            <br />
                            As a developer, I have a strong interest in how
                            technology will blend with our daily life. With a
                            science background I found myself getting more
                            interested in Bio-Tech, Neural Networks, Data
                            Analytics, and Machine Learning. We have just
                            started to scratch the surface on how to apply our
                            current tech to our day to day. As our<em>
                                (my)
                            </em>{' '}
                            understanding grows, I aspire to bridge the gap
                            further between technology and human interaction.
                            Hoping one day help the impared regain control.<br />
                            <a href="thedeveloper">
                                -- read more about my developer skills here
                            </a>
                            <br />
                            <br />
                            At the end of the day it’s nice to “unplug”. When
                            I’m not behind a computer, you will normally find me
                            around a workbench. With a passion for traditional
                            woodworking I continue to learn and hone my craft
                            focusing on hand tools, japanese joinery, and
                            furniture making. A goal of mine is to keep trade
                            skill alive. As we &ldquo;evolve&rdquo; with
                            technology I still feel it vital and valuable to
                            work with your hands, and understanding process
                            without a screen. Learning and sharing what I can
                            you can see more <a href="thecraftsman">here</a>.
                            <br />
                            <br />
                            I am trying to write as learn{' '}
                            <em>(or at least track my progress)</em> both as a
                            developer and craftsman. You may follow my blog{' '}
                            <a href="/blog">here</a> or follow me on{' '}
                            <a href="#"> Medium @mthomps4</a>. I am also
                            available at any of the social links below.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
// <h1 className="display-3 warp3">3</h1>
// <h1 className="title">WireBuild</h1>
