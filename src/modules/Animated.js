import React from 'react';
const Square = () => {
    return (
        <div className="screen">
            <div className="ball1 animateball1" />
            <div className="ball1 animateball1-2" />
            <div className="ball1 animateball1-3" />

            <div className="ball2 animateBall2" />
            <div className="ball2 animateBall2-2" />
            <div className="ball2 animateBall2-3" />

            <div className="ball3 animateBall3" />
            <div className="ball3 animateBall3-2" />
            <div className="ball3 animateBall3-3" />
        </div>
    );
};

export const Logos = () => {
    return (
        <div className="gridContainer">
            <div className="gridAnimation" />
        </div>
    );
};

export default Square;
