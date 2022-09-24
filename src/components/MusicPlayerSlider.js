import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import useMusicPlayer from "../hooks/usePlayerProvider";
import "../styles.css";

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

export default function MusicPlayerSlider() {
  const {
    playTrack,
    togglePlay,
    trackList,
    isPlaying,
    currentTrackIndex,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  const theme = useTheme();
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Widget>
        <Box
          sx={{
            display: "flex",
            alignItems: "right",
            flexDirection: "column",
            padding: "1rem",
            margin: "1em",
          }}
        >
          {trackList.map((tracks, index) => {
            return (
              <>
                <Box key={Math.random()} sx={{ ml: 1, minWidth: 0 }}>
                  <IconButton
                    onClick={() => {
                      playTrack(index);
                    }}
                  >
                    {index === currentTrackIndex && isPlaying ? (
                      <PauseRounded
                        sx={{ fontSize: "1.2rem" }}
                        htmlColor={mainIconColor}
                      />
                    ) : (
                      <PlayArrowRounded
                        sx={{ fontSize: "1.2rem" }}
                        htmlColor={mainIconColor}
                      />
                    )}
                  </IconButton>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                    fontWeight={
                      index === currentTrackIndex && isPlaying ? 600 : 200
                    }
                  >
                    {tracks.name}{" "}
                  </Typography>
                </Box>
              </>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2,
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1,
          }}
        >
          <IconButton
            onClick={() => playPreviousTrack(currentTrackIndex)}
            aria-label="previous song"
          >
            <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
          <IconButton onClick={() => togglePlay()}>
            {isPlaying ? (
              <PauseRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PlayArrowRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
              />
            )}
          </IconButton>
          <IconButton
            onClick={() => playNextTrack(currentTrackIndex)}
            aria-label="next song"
          >
            <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
        </Box>
      </Widget>
    </Box>
  );
}
