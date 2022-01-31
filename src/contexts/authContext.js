import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //Login
  const login = async (email, password) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
        setLoading(false);
        window.location.replace("/dashboard");
        toast.success("Successfully signed in", {
          theme: "colored",
          autoClose: 2000,
        });
        return response.user;
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setLoading(false);
      });
  };

  //Send Password Reset Email
  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
        toast.success("Please check your email to reset your password", {
          theme: "colored",
          autoClose: 2000,
        });
        return true;
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  //Logout
  const logout = () => {
    signOut(auth).then(() => {
      setUser(false);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthenticating(false);
    });

    return () => unsubscribe();
  }, []);

  const values = {
    user,
    loading,
    error,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
