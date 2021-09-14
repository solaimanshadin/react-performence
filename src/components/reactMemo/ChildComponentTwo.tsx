import React from 'react';
interface IProps{
    incrementCount: () => void
}
const ChildComponentTwo = ({incrementCount}: IProps) => {
    console.log("Rendering ChildComponentTow");

    return (
        <div className="p-5">
            <p>Hello from childComponentTwo</p>
            <button onClick={incrementCount} className="btn btn-outline-success">Increment from childComponentTwo</button>
        </div>
    );
};

export default React.memo(ChildComponentTwo);