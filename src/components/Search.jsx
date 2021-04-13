import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import TrackContext from "../TrackContext";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MusicNoteTwoToneIcon from "@material-ui/icons/MusicNoteTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { track_list, heading, setTrack_list, setHeading } = useContext(
    TrackContext
  );
  const [trackTitle, setTrackTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://corsanywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MUSICMATCH_API_KEY}`
      )
      .then((res) => {
        let list = res.data.message.body.track_list;
        setTrack_list(list);
      })
      .catch((err) => console.log(err));
  }, [trackTitle]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.length > 0) {
      setHeading("Search Results");
      setTrackTitle(searchQuery);
    }
  };

  return (
    <Card variant="outlined" style={{ marginBottom: "20px" }}>
      <center>
        <CardContent>
          <Typography variant="h3" component="h1">
            Search your Song
            <MusicNoteTwoToneIcon style={{ fontSize: "50px" }} />
          </Typography>
          <Typography color="textSecondary">Get your lyrics</Typography>
          <br />
        </CardContent>
        <form onSubmit={handleSearch}>
          <div style={{ width: "100%", marginBottom: "20px" }}>
            <TextField
              id="filled-search"
              label="Search field"
              type="search"
              variant="filled"
              style={{ width: "95%" }}
              onChange={(e) => {
                setSearchQuery(e.currentTarget.value);
              }}
            />
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </div>
        </form>
      </center>
    </Card>
  );
};

export default Search;
