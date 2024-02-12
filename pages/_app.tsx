import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

interface Props {
  Component?: any;
  pageProps?: any;
  // any props that come into the component
}

function MyApp({ Component, pageProps }: Props) {
  return (
    // <ThemeProvider enableSystem={true} attribute="class">
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
