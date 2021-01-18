import PropTypes from 'prop-types'
import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);
  const { delay, children, content, direction } = props

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction || 'top'}`}>
          {/* Content */}
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Tooltip;
