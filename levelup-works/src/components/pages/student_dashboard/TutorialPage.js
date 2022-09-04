import React from 'react';

export const TutorialPage = ({ tabSelected }) => {
  return (
    <div style={{ display: tabSelected === 3 ? "block" : "none" }}>Tutorial</div>
  )
};
