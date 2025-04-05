import './login.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usuario, setUsuario] = useState({});

  const nav = useNavigate();


 
  useEffect(() => {
    const cachedUser = JSON.parse(localStorage.getItem('usuario'));
    if (cachedUser) {
      setUsuario(cachedUser);
      nav('/agendamentos');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <main className='login-page'>
        <section className='login-container'>
          <h2 style={{ fontFamily: 'Arial, sans-serif' }}>LOGIN</h2>
          <form id='login-form' onSubmit={()=>{}}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
              id='email'
              name='email'
              placeholder='Endereço de E-mail'
              required
            />
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
              id='password'
              name='password'
              placeholder='Senha'
              required
            />
            <br />
            <br />
            <input type='submit' value='Entrar' />
          </form>


          <Link to="/registro">Registrar</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
