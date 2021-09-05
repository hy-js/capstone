import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [signedin, setsignedin] = useState(undefined);

  async function getsignedin() {
    const signedinRes = await axios.get("http://localhost:5000/auth/signedin");
    setsignedin(signedinRes.data);
    console.log(signedinRes.data)
  }

  useEffect(() => {
    getsignedin();
  }, []);

  return (
    <AuthContext.Provider value={{ signedin, getsignedin }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };