import React, { Component } from 'react';
import title from '../img_source/letter.png';

class Counter extends Component {
    /*
    state = {
        number: 0
    }
    */
    constructor(props) {
        super(props);
        this.state = {
            number : 0
        }
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({ number: number -1 })
        );
        alert("minus");
    }

    render() {
        return (
            <div>
                <img src={title} className="titleimg" alt="titleimg" />
                {/*
                <h1>月내 할일</h1>
                <div>중요도: {this.state.number}</div>
                <button onClick={this.handleIncrease} className="btn">+</button>
                <button onClick={this.handleDecrease} className="btn">-</button>
                */}
            </div>
        )
    }
}

export default Counter;