
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import { store } from './Components/redux2/store.js'
// import { store } from './Components/redux1/store.js'
// import { store } from './Components/redux2/store.js'
// import { store } from './Components/redux/store';
// import {store} from "./Components/redux2/store.js"
import {store} from "./Components/redux3/store.js"

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
