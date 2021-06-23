import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default class Results extends Component {
    render() {
        let searchResults = this.props.results.map((result) => {
            return <li key={ uuidv4() }><img src={result} /></li>
        })

        return (
            <ul>
                {searchResults}
            </ul>
        )
    }
}