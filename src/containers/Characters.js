import { useState, useEffect } from "react";
import axios from "axios";

import CharacterCards from "../components/CharacterCards";
import Banner from "../components/Banner";
import PageNav from "../components/PageNav";

const Characters = ({ search, favoriteCharacters, setFavoriteCharacters }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-back-vlb.herokuapp.com/characters?limit=${limit}&skip=${skip}&name=${search}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [search, limit, skip]);

  console.log(data);
  return (
    <>
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div>
          <div className="container-banner">
            <Banner />

            <div className="container-hero layout">
              <h1>
                Characters of
                <br />
                the Marvel Universe
              </h1>
            </div>
          </div>
          <CharacterCards
            results={data.results}
            setFavoriteCharacters={setFavoriteCharacters}
            favoriteCharacters={favoriteCharacters}
          />
          <PageNav
            count={data.count}
            skip={skip}
            setSkip={setSkip}
            limit={limit}
            setLimit={setLimit}
          />
        </div>
      )}
    </>
  );
};

export default Characters;
