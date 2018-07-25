import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Table
 */
class Table extends Component {
  render() {
    return (
      <table className="c-table">
        <thead className={`c-table__head ${!this.props.showColumnNames ? 'h-remove' : ''}`}>
          <tr>
            {this.props.columns.map( (column, index) => (
              <th key={index}>
                {column.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.props.rows.map( (row, index) => (
            <tr key={index}>
              {row.map( (cell, subIndex) => (
                <td key={index + '_' + subIndex} width={this.props.columns[subIndex].width}>
                  {cell}
                </td>
              ))}
            </tr>
          )
          )}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    width: PropTypes.string,
  })),
  rows: PropTypes.array,
  showColumnNames: PropTypes.bool,
};

Table.defaultProps = {
  showColumnNames: true,
};

export default Table;
