import React, { Component } from 'react';
import { css } from 'glamor';

class Grid extends Component {
  gap = '1px';

  render() {
    const { name } = this.constructor;
    const style = css({
      display: 'grid',
      gridGap: this.gap,
      gridTemplateColumns: this.columns,
      gridTemplateRows: this.rows,
    });
    return (
      <div className={`${name}-Grid`} {...style}>
        {this.components.map((component, index) => (
          <div key={`${name}-Grid-Element-${index}`}>{component}</div>
        ))}
      </div>    
    );
  }
};

export default Grid;
