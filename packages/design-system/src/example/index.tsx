import * as React from 'react';

function Example(): React.ReactElement {
  const example = 'This is a component from the design-system package';

  return (
    <div className="font-bold text-blue-500">{example}</div>
  );
}

export default Example;