import React, { useState, useEffect } from "react";

import "./Profile.css";

function WebPlayback(props) {
  const [player, setPlayer] = useState(undefined);
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);

  const track = {
    name: "",
    album: {
      images: [{ url: "" }],
    },
    artists: [{ name: "" }],
  };

  const [current_track, setTrack] = useState(track);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = "ec51a3bbaf954935b24d88b1818089c9";
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.connect();
    };
  }, [props.token]);

  // window.onload = function () {

  //   document.getElementById('togglePlay').onclick = function() {
  //     player.togglePlay();
  //   };

  //   player.addListener("player_state_changed", (state) => {
  //     if (!state) {
  //       return;
  //     }

  //     setTrack(state.track_window.current_track);
  //     setPaused(state.paused);

  //     player.getCurrentState().then((state) => {
  //       !state ? setActive(false) : setActive(true);
  //     });
  //   });
  // }

  return (
    <>
      <div>
        <container className="content">
          <iframe
            src="https://open.spotify.com/embed/artist/6futYSDVulYR2PktBjTB5W?utm_source=generator"
            width="25%"
            height="200"
            frameBorder="10"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/artist/2gINJ8xw86xawPyGvx1bla?utm_source=generator"
            width="25%"
            height="200"
            frameBorder="10"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </container>
      </div>
    </>
  );
}

export default WebPlayback;
