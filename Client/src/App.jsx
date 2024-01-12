import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Games from './components/Games';
import Forum from './components/forum';
import Film from './components/Film';
import Anime from './components/Anime';
import Admin from './components/admin';
import Wiki from './components/wiki';
import Apps from './assets/Application';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Atasan from './pages/Atasan';
import Profile from './pages/Profile';
import AnimeItem from "./komponen/AnimeItem";
import Gallery from "./komponen/Gallery";
import Homepage from "./komponen/Homepage";
import Heathers from "./komponenkedua/header/Header";
import Home2 from "./pages/home/home";
import MovieList from "./komponenkedua/movieList/movieList";
import Movie from "./pages/movieDetail/movie";
import Body from "./forum/AskQuestion";
import Question from "./forum/question2";

export default function App() {
  return (
    <BrowserRouter>
      <Atasan/>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="games" element={<Games />} />
        <Route path="forum" element={<Forum />} />
        <Route path="film" element={<Film />} />
        <Route path="anime" element={<Anime />} />
        <Route path="admin" element={<Admin />} />
        <Route path="wiki" element={<Wiki />} />
        <Route path="apps" element={<Apps />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
        <Route path="/character/:id" element={<Gallery />} />
        <Route path="Home2" element={<Home2 />}></Route>
        <Route path="movie/:id" element={<Movie />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route path="heathers" element={<Heathers />} />
        <Route path="body" element={<Body />} />
        <Route path="question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}







