import PropTypes from "prop-types";
import { useEffect } from "react";

Right3.propTypes = {
  onCountUp: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  onCountDown: PropTypes.func.isRequired,
};

function Right3({ onCountUp, reset, onCountDown }) {
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });
  return (
    <div>
      <h3>Right3</h3>
      <button
        onClick={() => {
          onCountUp(1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          reset(1);
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          onCountDown(1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Right3;
