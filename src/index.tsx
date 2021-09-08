import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { HeaderComponent } from "./components/header";
import { Container } from "./components/container";
import { setToLS } from "./utils/storage";
import * as themes from "./theme/data.json";
import { useTheme } from "./theme/useTheme";
import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PinkPage } from "./pages/pink";
import { YellowPage } from "./pages/yellow";

const Index = () => {
  setToLS("all-themes", themes.theme);
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  console.log(themeLoaded);
  console.log(selectedTheme);

  return (
    <React.StrictMode>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <HeaderComponent
            menu
            logo="assets/logo.png"
            items={[
              { name: "Yellow", link: "yellow" },
              { name: "Pink", link: "pink" },
            ]}
          />

          <Container>
            <Router>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/pink" component={PinkPage} />
                <Route path="/yellow" component={YellowPage} />
              </Switch>
              <HomePage setSelectedTheme={setSelectedTheme} />
            </Router>
          </Container>
        </ThemeProvider>
      )}
    </React.StrictMode>
  );
};

ReactDOM.render(
  <Index />,

  document.getElementById("root")
);