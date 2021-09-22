import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-1">
            <span
              data-test-id={this.getDataTestId(this.getBadgeClasses())}
              style={{ fontSize: 24 }}
              className={this.getBadgeClasses()}
            >
              {this.formatCount()}
            </span>
          </div>
          <div className="col-md-4">
            <button
              data-test-id={this.getDataTestId("btn-secondary")}
              className="btn btn-secondary"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            <button
              data-test-id={this.getDataTestId("btn-info")}
              className="btn btn-info m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </button>
            <button
              data-test-id={this.getDataTestId("btn-danger")}
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };
  //unique testId generated for each elements
  getDataTestId = (prefix) => {
    prefix = prefix.split(" ").pop();
    let dataTestId = prefix + this.props.counter.id;
    return dataTestId;
  };
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
