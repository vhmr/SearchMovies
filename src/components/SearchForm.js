import React, { Component } from "react";

const API_KEY = "2e0d12d1";

export class SearchForm extends Component {
  state = {
    inputSearch: "",
  };

  _handleChange = (e) => {
    this.setState({ inputSearch: e.target.value });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    const { inputSearch } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputSearch}`)
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
        const { Search = [], totalResults = "0" } = results;
        this.props.onResults(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Moive...."
              onChange={this._handleChange}
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    );
  }
}
