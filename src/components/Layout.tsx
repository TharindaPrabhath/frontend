import { ReactNode } from "react";

// components
import Header from "./Header";
import Footer from "./Footer";

// mui
import Box from "@mui/system/Box";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div>
      <Header />
      <Box
        sx={{ backgroundColor: "#E2E2E2", height: "100%", minHeight: "90vh" }}
      >
        {children}
      </Box>
      <Footer />
    </div>
  );
}
