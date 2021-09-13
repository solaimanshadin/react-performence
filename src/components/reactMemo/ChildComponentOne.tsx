import React from 'react';

const ChildComponentOne = () => {
    console.log("Rendering ChildComponentOne");
    return (
        <div className="p-5">
            <p>Hello, from childComponentOne</p>
        </div>
    );
};

export default ChildComponentOne;