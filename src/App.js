import { Banner } from './components/banner';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import "./styles/app.scss"
function App() {
  return (
    <>
    <div className="app">
   <Header/>
   
   <Banner/>
   <Footer/>
    </div>
    </>
  );
}

export default App;
