import React from 'react';

export const SubmissionsPage = ({ tabSelected }) => {
  return (
    <div style={{display: tabSelected === 5 ? "block" : "none"}}>Submit</div>
  )
};
