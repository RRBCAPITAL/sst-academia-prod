import ResponsiveAppBar from "@/src/presentation/components/Navbar";
import { Box } from "@mui/material";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <Box boxShadow="4">
        <ResponsiveAppBar />
        </Box>
        <main>{children}</main>
      </div>
    );
  }