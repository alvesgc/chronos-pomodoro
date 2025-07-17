import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Timer } from './components/Timer';

import { Home } from './pages/Home';
import './styles/theme.css';
import './styles/global.css';
import type { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
      
      <Container>
        <Timer />
      </Container>
    </>
  );
  const [state, setState] = useState(initialState);
  
  return <Home state={state} setState={setState} />;
}
