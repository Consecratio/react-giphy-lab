import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'

export default class SearchContainer extends Component {
    render() {
        return (
            <div>
                <Search handleSearch={this.props.handleSearch} value={this.props.value} />
                <Result results={this.props.results} />
            </div>
        )
    }
}