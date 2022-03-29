import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Navbar/Nav';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

// зробити шоб повідомлення були по різні сторони з кружечками    ------------
// в сайдбар добавити блок френдс, який завжди  відображаться і 3 друзів з авами
// стейт для френдсів
const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.sideBar}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/" element={<Profile store={props.store} />} />
            <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/friends" element={<Friends state={props.state.sideBar}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
