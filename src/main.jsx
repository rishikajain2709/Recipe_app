
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import RecipeContext from './Context/RecipeContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <BrowserRouter>
  <RecipeContext>
    <App />
    </RecipeContext>

  </BrowserRouter>
  </Provider>,
)
