import logo from './logo.svg';
import './App.css';
import HomeContainer from './container/HomeContainer'
import HeaderContainer from './container/HeaderContainer';
import MovieList from './components/MovieList';
import Calculator from './components/Calculator';
import Game from './components/TicTacToe';

function App() {
  return (
    <div className="App">
      {/* <Calculator />
      <MovieList /> */}
      <Game />
      {/* <HomeContainer />
      <HeaderContainer /> */}
    </div>
  );
}

export default App;
