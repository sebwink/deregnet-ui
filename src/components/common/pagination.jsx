import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Pagination extends Component {
  static paginate(data, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(data)
      .slice(startIndex)
      .take(pageSize)
      .value();
  }
  
  render() {
    const { itemsCount, pageSize, currentPage, onPageChange } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1); 
    return (
      <nav>
        <ul className="pagination">
          { 
            pages.map( (page) => (
              <li key={page} className={ page === currentPage ? "page-item active": "page-item"}>
                <button
                  className="page-link"
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </li>
            ))
          }        
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};


export default Pagination;
