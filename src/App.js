import { AllRoutes } from "./routes/AllRouts";
import { Header } from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;