import React from 'react';

export const InstructionsPage = ({ tabSelected }) => {
  return (
    <div style={{ display: tabSelected === 2 ? "block" : "none" }}>Instructions</div>
  )
};
