import React, { Component } from 'react';

class Grid extends Component {
  render() {
    const { name } = this.constructor;
    return (
      <div className={`${name}-Grid`}>
        {this.components.map((component, index) => (
          <div key={`${name}-Grid-Element-${index}`}>{component}</div>
        ))}
      </div>    
    );
  }
};

export default Grid;
