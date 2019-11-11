import React from 'react';
import News from "../news/News";
import {myNews} from "../../myNews";
import './App.less';
import AddNewsComponent from "../inputComponent/addNewsComponent";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3>Новости</h3>
                <AddNewsComponent/>
                <News data={myNews}/>
            </React.Fragment>
        );
    }
}

export default App;