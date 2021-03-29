import React from 'react';
import Header from "./components/Header";

export default ({ children } : any) => {
  return (
    <div>
      <Header />
      {children}
      Hi there!
    </div>
  );
};
