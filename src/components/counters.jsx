import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      counters,
      onRestart,
      dataTestId,
    } = this.props;
    return (
      <div>
        <button
          data-test-id="btn-success-refresh"
          className="btn btn-success m-2"
          onClick={onReset}
          disabled={counters.length === 0 ? "disabled" : ""}
        >
          <i className="fa fa-refresh" aria-hidden="true" />
        </button>
        <button
          data-test-id="btn-primary-recycle"
          className="btn btn-primary m-2"
          onClick={onRestart}
          disabled={counters.length !== 0 ? "disabled" : ""}
        >
          <i className="fa fa-recycle" aria-hidden="true" />
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            dataTestId={dataTestId}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
