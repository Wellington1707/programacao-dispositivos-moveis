import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./Screens/LoginScreens";
import ChatScreen from "./Screens/ChatScreen";
function App(){
  return <SafeAreaProvider>
    <ChatScreen/>
  </SafeAreaProvider>
}

export default App    