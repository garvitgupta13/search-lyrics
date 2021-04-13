import React, { useContext } from "react";
import TrackContext from "../TrackContext";
import Loading from "./Loading";
import Track from "./Track";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "../App.css";

const Tracks = () => {
  const tracks = useContext(TrackContext);
  const { heading, track_list } = tracks;

  if (track_list.length > 0) {
    return (
      <div>
        <div className="heading">
          <Typography variant="h5" component="h2">
            {heading}
          </Typography>
        </div>
        <Grid container spacing={3}>
          {track_list.map((t) => {
            return (
              <Grid item xs={6} key={t.track.track_id}>
                <Track track={t.track} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  } else {
    return (
      <center>
        <Loading />
      </center>
    );
  }
};

export default Tracks;
