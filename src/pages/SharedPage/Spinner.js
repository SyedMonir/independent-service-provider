import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className=" absolute top-2/4 left-2/4 z-50">
      <PropagateLoader color={'black'} size={50} />
    </div>
  );
};

export default Spinner;
