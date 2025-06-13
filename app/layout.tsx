"use client"

import Head from "next/head";
import GoogleAnalytics from "@/src/presentation/components/GoogleAnalytics";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { baselightTheme } from "@/src/presentation/utils/DefaultColors";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CursoProvider } from "@/src/application/context/CursoContext";
import { TanstackReactQueryProvider } from "@/src/infrastructure/providers/TanstackReactQueryProvider";
import { LoginProvider } from "@/src/presentation/context/LoginContext";
import dynamic from "next/dynamic";
const LoginDrawerContainer = dynamic(() => import("@/src/presentation/components/Login/LoginDrawerContainerComponent"), {
  ssr: false,
});

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>
      <body
        className={`${montserratFont.variable} antialiased`}
      >
        <GoogleAnalytics />
        <TanstackReactQueryProvider>
        <ThemeProvider theme={baselightTheme}>
        <CursoProvider>
        <CssBaseline />
        <LoginProvider>
        <LoginDrawerContainer />
        {/* <ModalLoginProvider>
        <ModalLoginPrompt /> */}
        {children}
        {/* </ModalLoginProvider> */}
        </LoginProvider>
        </CursoProvider>
        </ThemeProvider>
        </TanstackReactQueryProvider>
      </body>
    </html>
  );
}
