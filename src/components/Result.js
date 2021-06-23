import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default class Result extends Component {
    render() {
        let searchResults = this.props.results.map((result) => {
            return <li key={ uuidv4() }><img src={result} alt="" /></li>
        })

        return (
            <ul>
                {searchResults}
            </ul>
        )
    }
}