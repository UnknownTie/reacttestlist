import React from 'react';
import { lastUpdated } from 'lastUpdated';

function GitUpdated() {

  const gitUpdated = lastUpdated || 'lastUpdated Null';

  return (
    <div>
      <p>(최종 업데이트 : {gitUpdated} ) </p>
    </div>
  );
}

export default GitUpdated;
