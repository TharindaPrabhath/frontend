import React, { Suspense } from "react";

// react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// routes
import ROUTES from "./routes/routes";

// mui
import { ThemeProvider } from "@mui/material";

// components
import Layout from "./components/Layout";

// theme
import theme from "./theme";
import Loader from "./components/Loader";

// redux
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
          <div className="App">
            <Layout>
              <Suspense fallback={<Loader />}>
                <Routes>
                  {ROUTES.map((route, index) => {
                    return (
                      <Route
                        path={route.path}
                        element={<route.component />}
                        key={index}
                      />
                    );
                  })}
                </Routes>
              </Suspense>
            </Layout>
          </div>
        </Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
