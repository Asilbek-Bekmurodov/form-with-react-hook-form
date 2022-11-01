import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthPage from "./pages/auth-page";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <AuthPage />
    </div>
  );
}

export default App;
