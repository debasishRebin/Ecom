import React, {useState, useEffect, createContext} from 'react';
export const HeaderContext = createContext();

const HeaderContextProvider = props => {
  const [goBackRoute, setGoBackRoute] = useState('Home');

  return (
    <HeaderContext.Provider
      value={{
        goBackRoute,
        setGoBackRoute,
      }}>
      {props.children}
    </HeaderContext.Provider>
  );
};
export default HeaderContextProvider;
