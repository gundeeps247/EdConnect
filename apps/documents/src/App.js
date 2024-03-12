import Data from "./components/Data";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { auth, provider } from './firebase';
import styled from 'styled-components';
import { useState } from 'react';
import logo from './assets/logo.png';

const LoginWrapper = styled.div`
  background: lightblue;
  padding: 10px;
  width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  img {
    width: 200px; /* Increase the width of the image */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 20px; /* Add some bottom margin */
  }
  button {
    width: 100%;
    background: darkblue;
    padding: 10px 20px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 16px;
    border: 0;
    outline: 0;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
`;

function App() {
  const [user, setUser] = useState(null);

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(({ user }) => setUser(user))
      .catch(err => alert(err))
  };

  return (
    <>
      {user ? (
        <>
          <Header photoURL={user.photoURL} />
          <div className="App">
            <Sidebar />
            <Data />
          </div>
        </>
      ) : (
        <LoginWrapper>
          <img src={logo} alt="Logo" /> {/* Use the logo image */}
          <button onClick={signIn}>Login to Drive</button>
        </LoginWrapper>
      )}
    </>
  );
}

export default App;
