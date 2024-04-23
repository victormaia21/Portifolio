import './styles/index.scss';
import Header from "./components/Header"
import Detail_me from './components/Details_Me'
import Projetos from './components/Projetos/Index';
import Servicos from "./components/Servicos/Index";
import Estatisticas from './components/Estatisticas/index';
import Footer from './components/Footer/Index';

function App() {
  

  return (
    <>
      <Header />
      <Detail_me />
      <Projetos />
      <Servicos />
      <Estatisticas/>
      <Footer/>
    </>
  )
}

export default App
