import React from "react";

export const UserDataConntext = createContext();

const UserContext = ({ children }) => {
  return (
    <div>
      <UserDataConntext.Provider>
        {children}
      </UserDataConntext.Provider>
    </div>
  );
};

export default UserContext;
