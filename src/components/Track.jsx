import React from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AlbumIcon from "@material-ui/icons/Album";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const Track = ({ track }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {track.track_name}
        </Typography>
        <Typography color="textSecondary">
          <strong>
            <AlbumIcon />
            Album:
          </strong>{" "}
          {track.album_name}
        </Typography>
        <Typography variant="body2" component="p">
          <strong>
            <PlayCircleFilledIcon />
            Artist:
          </strong>{" "}
          {track.artist_name}
        </Typography>
      </CardContent>
      <CardActions>
        {track.has_lyrics === 1 && (
          <Link
            to={`/lyrics/track/${track.track_id}`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Get Lyrics
              <MusicNoteIcon />
            </Button>
          </Link>
        )}
        {track.has_lyrics === 0 && (
          <Button variant="contained" color="primary" disabled>
            Lyrics are not Available
            <MusicNoteIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Track;
