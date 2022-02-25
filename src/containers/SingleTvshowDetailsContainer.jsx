import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TvShowDetails from "../components/TvshowDetails";

const SingleTvshowDetailsContainer = () => {
  const [tvshow, setTvshow] = React.useState({});
  const { showid } = useParams();

  React.useEffect(() => {
    axios
      .get(`/tvshow/tv/${showid}`)
      .then((response) => {
        setTvshow(response.data);
      })
      .catch((err) => console.error(err));
  }, [showid]);

  return (
    <div className="movieDetailsPage">
      <TvShowDetails show={tvshow} />
    </div>
  );
};

export default SingleTvshowDetailsContainer;
