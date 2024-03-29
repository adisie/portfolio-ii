
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'

import './index.css'
import App from './App'

const router = createHashRouter([
  {
    path: '/*',
    element: <App />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router}/>
)
