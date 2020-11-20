import React, { Component } from 'react';


class Counter extends Component {


    render() {
        return (
            <div className='counter__wrapper'>
                <div className='counter__header'>
                    <span>Counter</span>
                </div>
                <div className='counter'>
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                </div>
            </div>
        )
    }
}

export default Counter;