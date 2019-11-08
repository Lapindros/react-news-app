import React from 'react';
import './addNewsComponent.less';

class AddNewsComponent extends React.Component {

    state = {
        author: '',
        text: '',
        confirm: false,
    };

    handleClick = (e) => {
        this.setState({confirm: e.currentTarget.checked});
    };

    handleChangeAuthor = (e) => {
        this.setState({author: e.target.value});
    };

    handleChangeText = (e) => {
        this.setState({text: e.target.value});
        e.target.value;
    };

    render() {
        const {author, text} = this.state;
        return (
            <form
                className='add'
            >
                <input
                    className='add__author'
                    type='text'
                    placeholder='Ваше имя'
                    onChange={this.handleChangeAuthor}
                    value={author}
                />
                <textarea
                    className='add__text'
                    placeholder='Текст новости'
                    onChange={this.handleChangeText}
                    value={text}
                />
                <label className='add__confirmation'>
                    <input
                        type='checkbox'
                        onClick={this.handleClick}
                    />Я согласен с правилами
                </label>
                <button
                    className='add__btn'
                    disabled={!this.state.confirm}
                >
                    Show alert
                </button>
            </form>
        );
    }
}

export default AddNewsComponent;