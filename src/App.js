import React, { Component } from 'react';
import Counter from './components/Counter';
import TextForm from './components/TextForm';
import TextInfoList from './components/TextInfoList';
import moon from './img_source/Moon_2.png';

class App extends Component {
  index = 2
  state = {
    information: [
      {
        index: 0,
        task: '시험 준비',
        during: '5'
      },
      {
        index: 1,
        task: '알바 마무리',
        during: '3'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    console.log(data);
    this.setState({
      information: information.concat({ index: this.index++, ...data })
    })
  }
  handleRemove = (index) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.index !== index)
    })
  }
  handleUpdate = (index, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => index === info.index ? {...info, ...data} : info
      )
    })
  }
  render() {
    return (
      <div className="wrap">
        <Counter />
        <img src={moon} className="moonimg" alt="moon" />
        <TextForm onCreate={this.handleCreate} />
        <TextInfoList data={this.state.information} onRemove={this.handleRemove} onUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
