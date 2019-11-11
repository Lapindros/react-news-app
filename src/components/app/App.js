import React from 'react';
import News from "../news/News";
import './App.less';
import AddNewsComponent from "../addNewsComponent/addNewsComponent";
import Spinner from "../spinner/spinner";

class App extends React.Component {
    state = {
        news: null,
        isLoading: false,
    };

    static getDerivedStateFromProps(props, state) {
        let nextFilteredNews

        // смотрим в state.news
        // и проверяем, чтобы не клонировать null
        // например, в момент первой отрисовки
        if (Array.isArray(state.news)) {
            nextFilteredNews = [...state.news];

            nextFilteredNews.forEach((item, index) => {
                if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
                    item.bigText = 'СПАМ'
                }
            })

            return {
                filteredNews: nextFilteredNews,
            }
        }

        return null
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('http://localhost:8080/src/myNews.json')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setTimeout(() => {
                    this.setState({isLoading: false, news: data})
                }, 3000)
            })
    }

    handleAddNews = (data) => {
        // сначала мы формируем массив, на основе
        // всего того, что уже было в новостях
        // и кладем это все в новый массив +
        // новую новость кладем в начало массива
        const nextNews = [data, ...this.state.news];

        // затем обновляем новый массив новостей в this.state.news
        this.setState({news: nextNews});
    };

    render() {
        const {news, isLoading} = this.state;
        return (
            <div className='wrapper'>
                <AddNewsComponent
                    onAddNews={this.handleAddNews}
                />
                <h3>Новости</h3>
                {isLoading && <Spinner/>}
                {Array.isArray(news) && <News data={news}/>}
            </div>
        );
    }
}

export default App;