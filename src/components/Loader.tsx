// mui
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/system/Box";

export default function Loader() {
  return (
    <Box>
      <CircularProgress
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </Box>
  );
}
