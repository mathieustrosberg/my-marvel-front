import { useState, useEffect } from "react";
import axios from "axios";

import ComicsCards from "../components/ComicsCards";
import Banner from "../components/Banner";
import PageNav from "../components/PageNav";

const Comics = ({ search, favoriteComics, setFavoriteComics }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-back-vlb.herokuapp.com/comics?limit=${limit}&skip=${skip}&title=${search}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    console.log(search);
    fetchData();
  }, [limit, skip, search]);

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
                Marvel's
                <br />
                Comics Collection
              </h1>
            </div>
          </div>
          <ComicsCards
            results={data.results}
            favoriteComics={favoriteComics}
            setFavoriteComics={setFavoriteComics}
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

export default Comics;
