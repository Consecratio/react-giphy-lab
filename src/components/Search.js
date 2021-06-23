import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <label>Search</label>
                <input type="text" value={this.props.value} onChange={this.props.handleSearch} />
            </div>
        )
    }
}