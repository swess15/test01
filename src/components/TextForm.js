import React, { Component } from 'react';

class TextForm extends Component {
    state = {
        task: '',
        during: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            task: '',
            during: ''
        })
    }
    render() {
        const style = {
            fontSize: '35px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'rgba(144, 255, 144, 0.8)'
        };

        const style2 = {
            fontSize: '35px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#4ef3dd9c'
        };

        const content = {
            marginTop: '40%',
            marginLeft: '36%',
            marginRight: 'auto',
            display: 'block',
            width: '500px',
            
        }

        return(
            <form onSubmit={this.handleSubmit}>  
                    <div style={content}>
                        <div className="textbox">
                            <input type="text" placeholder="할 일" value={this.state.task} onChange={this.handleChange} name="task" className="taskText" /> 
                            <input type="number" placeholder="며칠 간?" value={this.state.during} onChange={this.handleChange} name="during" className="duringText" />
                            <input type="submit" value="등록" />
                        </div>
                        <hr/>
                        <div style={ style }><span style={style2}>{this.state.task}</span>를(을) <span style={style2}>{this.state.during}</span>일 안에 해낸다!</div>
                    </div>
            </form>
        );
    }
}

export default TextForm;