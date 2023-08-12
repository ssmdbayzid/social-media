import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div >
      <Header />
      <h1 className="text-3xl">Task Projects</h1>
      <main className="h-screen">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
