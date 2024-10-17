import Accordion from 'react-bootstrap/Accordion';
import Menu from './components/navbar';
import Footer from './components/footer';
import { Container } from 'react-bootstrap';

export default function Lista() {
    var noticias= 
    [
            {
               
                id: 1,
                titulo: "Nova descoberta científica revoluciona tratamento do câncer",
                conteudo: "Cientistas anunciaram uma nova abordagem para o tratamento do câncer que promete aumentar a taxa de sobrevivência dos pacientes em 30%."
            },
            {
                id: 2,
                titulo: "Tecnologia 5G chega a mais cidades do Brasil",
                conteudo: "A expansão da tecnologia 5G está em andamento, e várias cidades brasileiras já podem desfrutar de velocidades de internet muito mais rápidas."
            },
            {
                id: 3,
                titulo: "Festa de Aniversário de São Paulo atrai turistas de todo o país",
                conteudo: "A cidade de São Paulo celebra seu aniversário com uma série de eventos culturais e shows gratuitos, atraindo visitantes de várias partes do Brasil."
            },
       
    ]
    
  return (
    <>
        <Menu/>
        <Container>
            <Accordion>
                {noticias.map(noticia =>
                <Accordion.Item eventKey="0">
                <Accordion.Header>{noticia.titulo}</Accordion.Header>
                <Accordion.Body>       
                {noticia.conteudo}            
                </Accordion.Body>
                </Accordion.Item>
                )}
            </Accordion>
        </Container>
    <Footer />        
    </>
  );
}

