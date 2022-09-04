import React from 'react';

export const ProjectsPage = ({ tabSelected }) => {
  return (
    <div style={{ display: tabSelected === 4 ? "block" : "none" }}>Projects</div>
  )
};
