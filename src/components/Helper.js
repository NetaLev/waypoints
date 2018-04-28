


import React from 'react';
/*import PropTypes from 'prop-types';*/

//const Home = ({ p1Name, p2Name, board, onCellClicked }) => {
const Helper = (props) => {
  return (





    <div>


      <React.Fragment> {/* TODO: check why this project's babel does not support the new <></> fragment syntax */}
        {data.map((feedData, index) =>
          <ComponentWrapper key={feedData.key}>
            <ComponentTag {...feedData} /> {/*INFO: unique keys are passed from fake data*/}
          </ComponentWrapper>
        )}
      </React.Fragment>



      <span data-hook="p1-name">{p1Name}</span>
      <span data-hook="p2-name">{p2Name}</span>
      <table role="grid">
        <tbody>
          {board.map((row, rIndex) => (
            <tr key={rIndex}>
              {row.map((cell, cIndex) => (
                <td
                  key={cIndex}
                  role="gridcell"
                  data-hook="cell"
                  onClick={() => onCellClicked(rIndex, cIndex)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/*Home.propTypes = {
  p1Name: PropTypes.string.isRequired,
  p2Name: PropTypes.string.isRequired,
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onCellClicked: PropTypes.func.isRequired,
};*/
export default Helper;