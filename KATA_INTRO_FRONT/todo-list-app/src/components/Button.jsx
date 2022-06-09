import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
        <button 
            className='btn btn-primary'
            onClick={this.props.handleClick}
            type={this.props.type}
            >
            {this.props.title}
        </button>
    )
  }
}