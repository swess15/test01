import React, { Component } from 'react';
import TextInfo from './TextInfo'

class TextInfoList extends Component {
    static defaultProps = {
        list: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined')
    }

    render() {
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (<TextInfo key={info.index} info={info} onRemove={onRemove} onUpdate={onUpdate}/>)
        );
        return(
            <div>
                {list}
            </div>
        );
    }
}

export default TextInfoList;