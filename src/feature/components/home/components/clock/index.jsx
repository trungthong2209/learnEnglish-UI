import React from 'react';
import useClock from './components';


Clock.propTypes = {};

function Clock() {
  const { timeString } = useClock();

  return (
    <p style={{ fontSize: '42px' }}>{timeString}</p>
  );
}

export default Clock;