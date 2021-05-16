import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CharacterCards = ({
  results,
  favoriteCharacters,
  setFavoriteCharacters,
}) => {
  const addFav = (character) => {
    let newTab = [];
    if (favoriteCharacters.length === 0) {
      newTab.push(character);
    }

    newTab = [...favoriteCharacters, character];
    setFavoriteCharacters(newTab);
    console.log(favoriteCharacters);
  };
  return (
    <div className="container-cards layout">
      {results.map((character, index) => {
        return (
          <div>
            <div key={character._id} className="bloc-img">
              <div className="cards-container-text"></div>
              <Link to={`/comics/${character._id}`}>
                <div className="cards-text">
                  {character.name && <h2>{character.name}</h2>}
                </div>
              </Link>

              <div className="button-add">
                <button
                  onClick={() => {
                    addFav(character);
                  }}
                >
                  <div className="container-add">
                    <div className="text-btn">
                      <h4>Add to list</h4>
                    </div>

                    <FontAwesomeIcon icon="star" className="star-input-icon" />
                  </div>
                </button>
              </div>
              <img
                className="cards-img"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterCards;
