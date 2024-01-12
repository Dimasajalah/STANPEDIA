import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { currentUser } = useSelector(state => state.user);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="text-orange-700 text-3xl font-semibold leading-10 tracking-[2px] uppercase">
          <Link to="/">STANpedia</Link>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to="/games">Games</Link>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to="/Home2">Film</Link>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to="/homepage">Anime</Link>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to="/songs">Songs</Link>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to="/more">More</Link>
          </li>
          {currentUser ? (
            <li className='text-slate-700 hover:underline'>
            <Link to='/profile'>
              <img className='rounded-full h-10 w-10 object-cover' src={currentUser.avatar} alt='profile' />
            </Link>
          </li>
          ) : (
            <>
              <li className='text-slate-700 hover:underline'>
                <Link to='/signin'>Sign in</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;


