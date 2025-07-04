import { Container } from './components/Container';
import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Heading>Test</Heading>
      </Container>

      <Container>
        <Heading>2</Heading>
      </Container>
    </>
  );
}
