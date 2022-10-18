import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import DefaultLayout from "./layouts/DefaultLayout";
import publicRoutes from "./routes";

function App() {
    return (
        <Router>
            <div className="App px-[40px]">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
