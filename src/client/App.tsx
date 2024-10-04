import Header from "./components/Header";
import Todolist from "./components/Todolist";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App font-poppins text-white">
      <Header />
      <div className="flex justify-center">
        <Todolist />
      </div>
      <Footer />
    </div>
  );
}

export default App;
