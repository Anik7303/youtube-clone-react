import React, { Fragment } from "react";

// css stylesheets
import "./App.scss";

// components
import Header from "../../components/Header/Header";
import SideMenu from "../../components/SideMenu/SideMenu";
import MainSection from "../../components/MainSection/MainSection";
import Footer from "../../components/Footer/Footer";

const App = (props) => {
    console.log(props);
    return (
        <Fragment>
            <Header />
            <main className="main-container">
                {/* SideMenu */}
                {/* <SideMenu /> */}
                {/* MainSection */}
                {/* <MainSection /> */}
            </main>
            <Footer />
        </Fragment>
    );
};

export default App;
