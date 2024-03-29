
import { AuthProvider } from "./pages/auth/context/AuthProvider";
import { AppRouter } from "./router/AppRouter";
import { store } from './store/store'
import { Provider } from 'react-redux'


export function App() {
  return (
  
      <Provider store={store} >
      <AuthProvider>
        
         <AppRouter  />
      </AuthProvider>
      </Provider>
    
  );
}
