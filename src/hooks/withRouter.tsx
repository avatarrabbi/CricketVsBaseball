import { useLocation, useParams } from "react-router-dom";

import React from "react";

export function withRouter(Child: any) {
  return (props: any) => {
    const location = useLocation();
    const params = useParams();
    return (
      <Child
        {...props}
        location={location}
        params={params}
      />
    );
  };
}