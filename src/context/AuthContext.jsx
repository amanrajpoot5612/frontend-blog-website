import { createContext, useEffect, useState } from "react";
import { BACKEND_URI } from "../../api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // holds logged-in user
  const [loading, setLoading] = useState(true);

  // auto-fetch user from /profile if cookie exists
   useEffect(() => {
    fetch(`${BACKEND_URI}/user/profile`, {
      credentials: "include", // ✅ sends cookie automatically
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not authenticated");
        return res.json();
      })
      .then((data) => {
        setUser(data.user);  // ✅ store user in context
        setLoading(false);
      })
      .catch(() => {
        setUser(null);       // ❌ if token invalid or no cookie
        setLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
