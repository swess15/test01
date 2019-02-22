import React, { Component } from 'react';

class TextInfo extends Component {
    static defaultProps = {
        info: {
            task: '할 일',
            during: '결산 기간',
            index: 0
        }
    }

    state = {
        editing: false,
        task: '',
        during: ''
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.index);
    }

    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            this.setState({
                task: info.task,
                during: info.during
            });
        }

        if(prevState.editing && !this.state.editing) {
            onUpdate(info.index, {
                task: this.state.task,
                during: this.state.during
            });
        }
    }

    render() {
        const style = {
            color: 'white',
            border: '5px outset slategray',
            padding: '8px',
            margin: '8px'
        };

        const textstyle = {
            color: 'white',
            backgroundColor: 'black'
        }

        const { editing } = this.state;

        if (editing) {
            return(
                <div>
                    <div>
                        <input value={this.state.task} name="task" placeholder="할 일" onChange={this.handleChange} />
                    </div>
                    <div>
                        <input value={this.state.during} name="during" placeholder="수행 기간" onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }

        // 일반 모드
        const {
            task, during, index
        } = this.props.info;

        return(
            <div style={ style }>
                <div><i>*{index + 1}. *</i></div>
                <div><b style={ textstyle }>{task}</b>를(을)</div>
                <div><b>{during}</b>일 안에 해낸다!</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default TextInfo;