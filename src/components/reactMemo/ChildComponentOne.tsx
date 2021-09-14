import React from 'react';

const ChildComponentOne = ({count}: {count: number}) => {
    console.log("Rendering ChildComponentOne");
    return (
        <div className="p-5">
            <p>Count {count}, from childComponentOne</p>
        </div>
    );
};

export default React.memo(ChildComponentOne);