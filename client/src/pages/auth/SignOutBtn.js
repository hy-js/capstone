import React, {useContext} from 'react'
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function SignOutBtn() {
   const { getsignedin } = useContext(AuthContext);

   const history = useHistory();

   async function signout() {
     await axios.get("http://localhost:5000/auth/signout");
     await getsignedin();
     history.push("/");
   }

   return (
     <button onClick={signout}>Sign out</button>
   );
 }

 export default SignOutBtn;