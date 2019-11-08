import React from 'react';
import PropTypes from 'prop-types';
import './Article.less';

class Article extends React.Component {
    state = {
        visible: false,
    };

    onHandleDetailsClick = (e) => {
        e.preventDefault();
        this.setState({visible: true});
    };

    render() {
        const {author, text, id, bigText} = this.props.data;
        const {visible} = this.state;

        return (
            <div className="article" key={id}>
                <p className="article__author">{author}:</p>
                <p className="article__text">{text}</p>
                {
                    !visible &&
                    <a href="#" className='article__details' onClick={this.onHandleDetailsClick}>Подробнее</a>
                }
                {
                    visible && <p className="article__details-text">{bigText}</p>
                }
            </div>
        )
    };
}

Article.propTypes = {
    data: PropTypes.shape({
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
};

export default Article;