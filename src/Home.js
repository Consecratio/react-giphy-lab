import React, { Component } from 'react'
import SearchContainer from './components/SearchContainer'

const jsObject = {
  "data": [
    {
      "type": "gif",
      "id": "iuHaJ0D7macZq",
      "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
      "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
      "rating": "pg",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
        }
      }
    },
    {
      "type": "gif",
      "id": "Z1kpfgtHmpWHS",
      "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
      "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
      "rating": "g",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
        }
      }
    }
  ],
  "meta": {
    "status": 200,
    "msg": "OK"
  },
  "pagination": {
    "total_count": 1947,
    "count": 25,
    "offset": 0
  }
}

// move this over to SearchContainer
let apiKey = process.env.REACT_APP_GIPHY_API_KEY
console.log(apiKey)

export default class Home extends Component {
  // move this to SearchContainer
  constructor(props) {
    super(props)
    this.state = {
      filterValue: '',
      displayResults: []
    }
  }

  handleSearchChange = (e) => {
    const newSearch = e.target.value
    let filteredResults = []

    if(newSearch !== ""){
      filteredResults = jsObject.data.filter((item) => {
        return item.source.toLowerCase().includes(newSearch.toLowerCase())
      })
    }

    filteredResults = filteredResults.map(item => item.images.fixed_height.url)

    this.setState({
      filterValue: newSearch,
      displayResults: filteredResults
    })
  }

  render() {
    return (
      <main>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Giphy Search</h1>
            <p className="lead text-muted">The true source of all things giphy...</p>
          </div>
        </section>
        <section className="container">
          <SearchContainer
            items={jsObject.data}
            handleSearch={this.handleSearchChange}
            value={this.state.filterValue}
            results={this.state.displayResults}
          />
        </section>
      </main>
    )
  }
}