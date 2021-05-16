import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import Characters from "./containers/Characters";
import Header from "./components/Header";
import CharacterProfil from "./containers/CharacterProfil";
import Fav from "./containers/Fav";
import Comics from "./containers/Comics";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faSearch,
  faTimesCircle,
  faInfoCircle,
  faChevronCircleLeft,
  faChevronCircleRight,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faSearch,
  faTimesCircle,
  faStar,
  faInfoCircle,
  faChevronCircleLeft,
  faChevronCircleRight,
  faBars,
  faTimes
);

function App() {
  const [search, setSearch] = useState("");
  const [favoriteComics, setFavoriteComics] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Switch>
        <Route path="/mylist">
          <Fav
            favoriteComics={favoriteComics}
            favoriteCharacters={favoriteCharacters}
          />
        </Route>
        <Route path="/comics/:characterId">
          <CharacterProfil />
        </Route>
        <Route path="/comics">
          <Comics
            search={search}
            favoriteComics={favoriteComics}
            setFavoriteComics={setFavoriteComics}
          />
        </Route>
        <Route path="/">
          <Characters
            search={search}
            favoriteCharacters={favoriteCharacters}
            setFavoriteCharacters={setFavoriteCharacters}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
