import React from 'react';
import Article from "../article/Article";
import PropTypes from 'prop-types';
import './News.less';

class News extends React.Component {

    renderNews = () => {
        const {data} = this.props;
        let news = null;

        if (data.length) {
            news = data.map(function (item) {
                return (
                    <Article
                        key={item.id}
                        data={item}
                    />
                )
            });
        } else {
            news = <p className="news__empty">Новостей нет</p>
        }
        return news;
    };

    render() {
        const {data} = this.props;
        return (
            <div className="news">
                {this.renderNews()}
                {
                    data.length ?
                        <strong className='news__count'>Всего новостей: {data.length}</strong> : null
                }
            </div>
        );
    };
}

News.propTypes = {
    data: PropTypes.array.isRequired
};

export default News;