import { Box } from "@mui/material";
import React from "react";
import MusicPlayerSlider from "./components/MusicPlayerSlider";
import useMusicPlayer from "./hooks/usePlayerProvider";
import "./styles.css";

function App() {
  return (
    <Box>
      <MusicPlayerSlider />
    </Box>
  );
}

export default App;
