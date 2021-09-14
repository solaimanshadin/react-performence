import React, { MutableRefObject, useRef, useState, useCallback } from "react";
import { InputGroup } from "react-bootstrap";
import ChildComponentOne from "./ChildComponentOne";
import ChildComponentTwo from "./ChildComponentTwo";

const ParentComponent = () => {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number>(0)

  
  const incrementCount = useCallback( () => {
    console.log("Incrementing count...");
    setCount(count + 1);
  }, [count]);

  

  const decrementCount = () => {
    console.log("Decrementing count...");
    setCount(count + 1);
  };

  const handleCustomUpdate = () => {
    setCount(inputValue);
  };

  console.log("rendering ParentComponent...");
  return (
    <div className="p-5">
      <h1>Count: {count} </h1>
      <div className="text-center my-4">
        <button className="btn btn-danger" onClick={decrementCount}>
          -
        </button>
        <button className="btn btn-success ms-3" onClick={incrementCount}>
          +
        </button>
        <div className="col-2 mx-auto mt-4">
          <InputGroup className="mb-3">
            <input
              onChange={(e) => setInputValue(Number(e.target.value))}
              placeholder="Manual"
              className="form-control"
            />
            <button className="btn btn-primary" onClick={handleCustomUpdate}>Update</button>
          </InputGroup>
        </div>
      </div>

      <hr />
      <ChildComponentOne  count={count} />
      <hr />
      <ChildComponentTwo incrementCount={incrementCount} />
    </div>
  );
};

export default ParentComponent;
