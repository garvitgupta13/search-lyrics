import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import AlbumIcon from "@material-ui/icons/Album";
import ExplicitIcon from "@material-ui/icons/Explicit";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const Lyrics = (props) => {
  const track_id = props.match.params.id;
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://corsanywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${track_id}&apikey=${process.env.REACT_APP_MUSICMATCH_API_KEY}`
      )
      .then((response) => {
        let trackData = response.data.message.body.track;
        setTrack({ trackData });
        return axios
          .get(
            `https://corsanywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track_id}&apikey=${process.env.REACT_APP_MUSICMATCH_API_KEY}`
          )
          .then((res) => {
            let lyricData = res.data.message.body.lyrics;
            setLyrics({ lyricData });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [track_id]);

  if (
    track.trackData === undefined ||
    lyrics.lyricData === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics.lyricData).length === 0
  ) {
    return (
      <center>
        <Loading />
      </center>
    );
  } else {
    return (
      <Container fixed>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained">Back</Button>
        </Link>
        <br />
        <br />
        <Card>
          <CardContent>
            <center
              style={{
                backgroundColor: "#242B2E",
                color: "white",
                padding: "5px"
              }}
            >
              <Typography variant="h5" component="h2">
                {track.trackData.track_name} <QueueMusicIcon />
              </Typography>
              <Typography style={{ color: "#e3eaef" }}>
                by {track.trackData.artist_name}
              </Typography>
            </center>
            <br />
            <Typography variant="body2" component="p">
              {lyrics.lyricData.lyrics_body}
            </Typography>
          </CardContent>
        </Card>
        <br />
        <div style={{ marginBottom: "100px" }}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem>
              <ListItemIcon>
                <AlbumIcon />
              </ListItemIcon>
              <ListItemText>
                <strong>Album: </strong>
                {track.trackData.album_name}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MusicNoteIcon />
              </ListItemIcon>
              <ListItemText>
                <strong>Artist: </strong>
                {track.trackData.artist_name}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LibraryMusicIcon />
              </ListItemIcon>
              <ListItemText>
                <strong>Genre: </strong>
                {track.trackData.primary_genres.music_genre_list.length === 0
                  ? "NO GENRE AVAILABLE"
                  : track.trackData.primary_genres.music_genre_list[0]
                      .music_genre.music_genre_name}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ExplicitIcon />
              </ListItemIcon>
              <ListItemText>
                <strong>Explicit: </strong>
                {track.trackData.explicit === 0 ? "NO" : "YES"}
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </Container>
    );
  }
};

export default Lyrics;
