import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import Lyrics from "./components/Lyrics";
import Index from "./components/Index";
import TrackContext from "./TrackContext";

import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import "./App.css";

function App() {
  const [track_list, setTrack_list] = useState([]);
  const [heading, setHeading] = useState("Top 10 hot songs");

  useEffect(() => {
    axios
      .get(
        `https://corsanywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=hot&page=1&page_size=10&country=in&f_has_lyrics=1&apikey=${process.env.REACT_APP_MUSICMATCH_API_KEY}`
      )
      .then((response) => {
        // console.log(response.data.message.body.track_list);
        setTrack_list(response.data.message.body.track_list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <TrackContext.Provider
      value={{ track_list, heading, setTrack_list, setHeading }}
    >
      <React.Fragment>
        <Navbar />
        <Container fixed>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </Container>
      </React.Fragment>
    </TrackContext.Provider>
  );
}

export default App;
