import CharacterCards from "../components/CharacterCards";
import ComicsCards from "../components/ComicsCards";

const Fav = ({ favoriteComics, favoriteCharacters }) => {
  return (
    <div>
      <div className="pad">
        <h5 className="layout">Characters Favorites</h5>
        <CharacterCards results={favoriteCharacters} />
      </div>

      <h5 className="layout">Comics Favorites</h5>
      <ComicsCards results={favoriteComics} />
    </div>
  );
};

export default Fav;
