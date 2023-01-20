import React, { Fragment } from "react";

const Loader = () => {
  return (
    <Fragment>
      <div class="flex items-center justify-center space-x-2">
        <div
          class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span class="hidden">Loading...</span>
        </div>
        <div
          class="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0"
          role="status"
        >
          <span class="hidden">Loading...</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Loader;
