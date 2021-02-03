import React from "react";

class Tooltip extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <div className="tooltip">
        <div className="tooltip__label">{children}</div>
        <div className="tooltip__dropdown">{title}</div>
      </div>
    );
  }
}

export { Tooltip };
