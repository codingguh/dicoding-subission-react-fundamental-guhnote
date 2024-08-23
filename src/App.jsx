/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import Routes from './routes';
import AuthContext from './context/AuthContext';
import { useEffect, useMemo, useState } from 'react';
import { getUserLogged } from './utils/network-data';

function App() {
  const [auth, setAuth] = useState(null)
  const [loading, setLoading] = useState(true)
  const authContextValue = useMemo(() => ({
    auth,
    setAuth
  }), [auth])

  useEffect(() => {
    /**
     * Get User Logged
     */
    getUserLogged()
      .then((res) => {
        if (!res.error) {
          setAuth(res.data)
        } else {
          setAuth(null)
        }
        setLoading(false)
      })
      .catch(() => {
        alert('Error')
      })

    /**
     * Inisialisasi Locale
     */
    if (localStorage.locale && ['id', 'en'].includes(localStorage.locale)) {
      setLocale(localStorage.locale)
    }

    /**
     * Inisialisasi Theme
     */

    // if (localStorage.theme) {
    //   changeTheme(localStorage.theme)
    // } else {
    //   localStorage.setItem('theme', 'dark')
    //   changeTheme('dark')
    // }
  }, [])

  return ( <AuthContext.Provider value={authContextValue}>
    <div className="app-container">
      {/* <HeaderComponent /> */}
      <main>
        {
          loading ? (
            // <LoadingIndicator />
            <div>ssdfsd</div>
          ) : (
            <Routes />
          )
        }
      </main>
    </div>
  </AuthContext.Provider>)
}

export default App
