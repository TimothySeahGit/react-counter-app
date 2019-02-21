import React from "react";

function Counter(props) {
  const { value, id, handleDelete, handleMinus, handlePlus } = props;
  const positive = () => {
    // if (state.value > 0) {
    //   return existingClass + "-primary";
    // }
    // return existingClass + "-warning";
    return value > 0 ? "primary" : "warning";
  };

  return (
    <React.Fragment>
      <h2>
        <span className={`badge badge-${positive()}`}>{value}</span>
      </h2>
      <button
        type="button"
        onClick={() => handlePlus(id)}
        className="btn btn-success"
      >
        +
      </button>
      <button
        type="button"
        onClick={() => handleMinus(id)}
        className="btn btn-danger"
      >
        -
      </button>
      <button
        type="button"
        onClick={() => handleDelete(id)}
        className="btn btn-dark"
      >
        Delete
      </button>
    </React.Fragment>
  );
}

export default Counter;
