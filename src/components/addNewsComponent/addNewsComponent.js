import React from 'react';
import PropTypes from 'prop-types';
import './addNewsComponent.less';

class AddNewsComponent extends React.Component {

    state = {
        author: '',
        text: '',
        bigText: '',
        confirm: false,
    };

    handleCheckboxChange = (e) => {
        this.setState({confirm: e.currentTarget.checked});
    };

    validate = () => {
        const {author, text, confirm} = this.state;
        if (author.trim() && text.trim() && confirm) {
            return true;
        } else {
            return false;
        }
    };

    onBtnClickHandler = (e) => {
        e.preventDefault();
        const {author, text, bigText} = this.state;
        this.props.onAddNews({id: +new Date(), author, text, bigText});
    };

    handleChange = (e) => {
        const {id} = e.currentTarget;
        this.setState({[id]: e.currentTarget.value})
    };

    render() {
        const {author, text, bigText} = this.state;
        return (
            <form
                className='add'
            >
                <input
                    className='add__author'
                    type='text'
                    placeholder='Ваше имя'
                    onChange={this.handleChange}
                    value={author}
                    id='author'
                />
                <textarea
                    className='add__text'
                    placeholder='Текст новости'
                    onChange={this.handleChange}
                    value={text}
                    id='text'
                />
                <textarea
                    className='add__big-text'
                    placeholder='Текст новости'
                    onChange={this.handleChange}
                    value={bigText}
                    id='bigText'
                />
                <label className='add__confirmation'>
                    <input
                        type='checkbox'
                        onChange={this.handleCheckboxChange}
                    />Я согласен с правилами
                </label>
                <button
                    className='add__btn'
                    disabled={!this.validate()}
                    onClick={this.onBtnClickHandler}
                >
                    Добавить новость
                </button>
            </form>
        );
    }
}

AddNewsComponent.proTypes = {
    onAddNews: PropTypes.func.isRequired,
};

export default AddNewsComponent;