import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { ContextElement } from "../../App";

const PrivateRouter = ({ children, ...rest }) => {
  const [panelName, setPanelName, userLoginInfo, setUserLoginInfo] = useContext(
    ContextElement
  );

  return (
    <Route
      {...rest}
      render={({ location }) =>
       ( userLoginInfo.email || sessionStorage.getItem('token')) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRouter;