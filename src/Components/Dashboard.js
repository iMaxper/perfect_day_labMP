import React from 'react';

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h3> Current Song: {props.song}</h3>
    </div>
  );
}

export default Dashboard;
