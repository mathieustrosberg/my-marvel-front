import ComicsCards from "../components/ComicsCards";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import axios from "axios";

const CharacterProfil = () => {
  const { characterId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-back-vlb.herokuapp.com/${characterId}`
      );
      console.log(response);
      setData(response.data);
      setIsLoading(false);
      console.log(data);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div>
          <div className="container-banner">
            <Banner />
            <div className="container-hero-name layout">
              <h1>{data.name}</h1>
              <h3>{data.description}</h3>
            </div>
          </div>
          <ComicsCards results={data.comics} />
        </div>
      )}
    </>
  );
};

export default CharacterProfil;
