import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //Sign up
  const signUp = async (email, password, firstName, lastName) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
        const user = auth.currentUser;
        updateProfile(user, {
          displayName: `${firstName} ${lastName}`,
        });
        setLoading(false);
        return response.user;
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  //Login
  const login = async (email, password) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
        setLoading(false);
        return response.user;
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  //Login with google
  const signInWithGoogle = async () => {
    setLoading(true);
    await signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        setUser(response.user);
        setLoading(false);
        return response.user;
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  //Send Password Reset Email
  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
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
    phone,
    setPhone,
    signUp,
    signInWithGoogle,
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
