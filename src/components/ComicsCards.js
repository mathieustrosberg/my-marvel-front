import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ComicsCards = ({ results, favoriteComics, setFavoriteComics }) => {
  const addFav = (comic) => {
    let newTab = [];
    if (favoriteComics.length === 0) {
      newTab.push(comic);
    }

    newTab = [...favoriteComics, comic];
    setFavoriteComics(newTab);
    console.log(favoriteComics);
  };
  return (
    <div className="container-cards layout">
      {results.map((comic) => {
        return (
          <div key={comic._id} className="bloc-img">
            <div className="cards-container-text"></div>
            <div className="cards-text">
              {comic.title && <h2>{comic.title}</h2>}
            </div>

            <div className="button-add">
              <button
                onClick={() => {
                  addFav(comic);
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
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ComicsCards;
