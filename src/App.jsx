// import './App.css'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
// import CardNote from './components/card_note/CardNote';



function App() {

  return (
   <RouterProvider router={router}/>
  )
}

export default App
