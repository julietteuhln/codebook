import './App.css';
import AllRoutes from './routes/AllRoutes';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer'


function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
