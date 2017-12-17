import React from 'react';
import Badge from 'reactstrap/lib/Badge';
import Progress from 'reactstrap/lib/Progress';
import Square from './Animated';

const Home = () => {
    return (
        <div>
            <div className="mainJumbo mb-0" fluid />
            <Progress
                animated
                color="info"
                value="100"
                style={{ height: '8px' }}
            />
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
                <h1>About</h1>
                <Square />
                <p>To describe myself in one word, I am a builder.</p>
                <p>
                    I’m a Developer, Woodworker, a "Do-It-Yourselfer", and
                    Adventuring Thinker. Driven by my curiosity, I continue to
                    experiment... It’s an itch and the process keeps me
                    motivated.
                </p>
                <p>
                    As a developer, I hope to find more ways to contribute to
                    and push new technologies to their limits. With an interest
                    in Bio-Tech, Neural Networks, and Machine Learning, I aspire
                    to bridge the gap further between technology and human
                    interaction.
                </p>
                <p>
                    At the end of the day it’s nice to “unplug”. When I’m not
                    behind a computer, you will normally find me around a
                    workbench. With a passion for traditional woodworking I
                    continue to learn and hone my craft focusing on hand tools
                    and furniture making. My goal is to keep trade skills from
                    becoming another chapter in the history book. Learning and
                    sharing what I can, you can follow the process on Instagram{' '}
                    <a href="https://www.instagram.com/3WireBuild" target="new">
                        @3WireBuild.
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Home;
// <h1 className="display-3 warp3">3</h1>
// <h1 className="title">WireBuild</h1>
