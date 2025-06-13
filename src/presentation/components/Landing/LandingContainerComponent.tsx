import { Box } from "@mui/material";
import LandingSection01 from "./LandingSection01Component";
import LandingSection02 from "./LandingSection02Component";
import LandingSection03 from "./LandingSection03Component";
import LandingSection04 from "./LandingSection04Component";

const LandingContainerComponent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        padding: "40px 0px",
        background: "#1f140d",
        textAlign: "center",
        color: "#737373",
        margin: 'auto',
        marginTop: '40px',
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}
    >
      <LandingSection01 />
      <LandingSection02 />
      <LandingSection03 />
      <LandingSection04 />
    </Box>
  )
}

export default LandingContainerComponent;