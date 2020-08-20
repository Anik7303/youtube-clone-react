import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// css stylesheets
import "./MainSection.scss";

// components

const MainSection = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <h1>Main Section</h1>
            {/* <Switch>
                <Route
                    exact
                    path="/youtube-tv"
                    render={() => {
                        props.location.href = "https://tv.youtube.com";
                        return true;
                    }}
                />
                <Route
                    exact
                    path="/youtube-music"
                    render={() => {
                        props.location.href = "https://music.youtube.com";
                        return true;
                    }}
                />
                <Route
                    exact
                    path="/youtube-kids"
                    render={() => {
                        props.location.href = "https://youtube.com/kids";
                        return true;
                    }}
                />
            </Switch> */}
        </React.Fragment>
    );
};

export default MainSection;
