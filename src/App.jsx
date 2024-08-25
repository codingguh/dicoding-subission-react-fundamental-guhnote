/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import Routes from "./routes";
import AuthContext from "./context/AuthContext";
import { useEffect, useMemo, useState } from "react";
import { getUserLogged } from "./utils/network-data";
import LocaleContext from "./context/LocaleContext";
import Loading from "./components/ui/loading/Loading";

function App() {
  const [auth, setAuth] = useState(null);
  const [locale, setLocale] = useState('id')
  const [loading, setLoading] = useState(true);
  const authContextValue = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth]
  );

  const toggleLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
  };


  const localeContextValue = useMemo(
    () => ({
      locale,
      toggleLocale,
    }),
    [locale]
  );


  useEffect(() => {
    /**
     * Get User Logged
     */
    getUserLogged()
      .then((res) => {
        if (!res.error) {
          setAuth(res.data);
        } else {
          setAuth(null);
        }
        setLoading(false);
      })
      .catch(() => {
        alert("Error");
      });

    /**
     * Inisialisasi Locale
     */
    if (localStorage.locale && ["id", "en"].includes(localStorage.locale)) {
      setLocale(localStorage.locale);
    }

  }, []);

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <AuthContext.Provider value={authContextValue}>
      <div className="app-container">
        {/* <HeaderComponent /> */}
        <main>
          {loading ? (
            // <LoadingIndicator />
            <Loading/>
          ) : (
            <Routes />
          )}
        </main>
      </div>
    </AuthContext.Provider>
    </LocaleContext.Provider>
  );
}

export default App;
