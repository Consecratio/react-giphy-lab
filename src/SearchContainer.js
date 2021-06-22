import { Component } from 'react'
import Search from './Search'
import Results from './Results'

export default class SearchContainer extends Component {
    render() {
        return (
            <div>
                <Search handleSearch={this.props.handleSearch} value={this.props.value} />
                <Results results={this.props.results} />
            </div>
        )
    }
}