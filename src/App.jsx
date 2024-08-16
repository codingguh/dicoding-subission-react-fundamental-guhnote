import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
