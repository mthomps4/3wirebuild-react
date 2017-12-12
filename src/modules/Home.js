import React from 'react';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import Button from 'reactstrap/lib/Button';
import Badge from 'reactstrap/lib/Badge';
import Alert from 'reactstrap/lib/Alert';
import Progress from 'reactstrap/lib/Progress';

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
                            <div className="d-flex justify-content-center align-items-center">
                                <h1 className="display-3 warp3">3</h1>
                                <h1 className="title">WireBuild</h1>
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
        </div>
    );
};

export default Home;
