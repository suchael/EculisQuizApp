import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import Status_bar from "./src/Status_bar.js";
import Navigation from "./Navigation.js";
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <>
    <Provider store={store}>
      <SafeAreaProvider>
        <Status_bar />
        <Navigation />
     
      </SafeAreaProvider>
      </Provider>
    </>
  );
}

