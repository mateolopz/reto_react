import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Componente1_1 from './components/reto1/componente1_1';
import Componente2_1 from './components/reto2/componente2_1';
import Componente3_1 from './components/reto3/componente3_1';
import './App.css';

function App() {
  return (
  <Container fluid>
    {/*<Componente1_1 />*/}
    {/*<Componente2_1 />*/}
    <Componente3_1 />
  </Container>
  );
}

export default App;
