import { Signin, Signup } from './components';
import './App.css';

interface onSubmitProps {
  email: string,
  password: string,
}

function App() {
  const onSubmit = ({ email, password }: onSubmitProps) => {

    // const response = await fetch('', {
    //   method: 'POST',
    //   body: { email, password }
    // });
    // const result = await response.json();

    console.log(`На вход ${email} с паролем ${password}`);
  };

  return (
    <div className='App'>
      <Signin onSubmit={onSubmit} />
      <Signup onSubmit={onSubmit} />
    </div>
  );
}

export default App;
