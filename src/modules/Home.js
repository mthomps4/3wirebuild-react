import React from 'react';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import Button from 'reactstrap/lib/Button';
import Badge from 'reactstrap/lib/Badge';
import Alert from 'reactstrap/lib/Alert';
import Progress from 'reactstrap/lib/Progress';

const Home = () => {
    return (
        <div>
            <div className="mainJumbo mb-0" fluid>
                <div className="d-flex justify-content-center align-">
                    <Badge
                        color="dark"
                        pill
                        style={{ 'background-color': '#005' }}
                    >
                        <div className="p-3 pr-5 pl-5 mr-5 ml-5">
                            <div className="d-flex justify-content-center align-items-center">
                                <h1 className="display-3 warp3">3</h1>
                                <h1 className="display-4">WireBuild</h1>
                            </div>
                            <div className="d-flex row justify-content-center subtitle">
                                <p className="pt-2 subtitle">
                                    Designer &bull; Developer &bull; Builder
                                </p>
                            </div>
                        </div>
                    </Badge>
                </div>
            </div>
            <Progress animated color="info" value="100" />
        </div>
    );
};

export default Home;
