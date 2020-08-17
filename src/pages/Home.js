import React, { Component } from "react";
import { Title } from "../components/title";
import { SearchForm } from "../components/SearchForm";
import { MovieList } from "../components/MovieList";

export class Home extends Component {
  state = { useSearch: false, results: [] };

  _handleResults = (results) => {
    this.setState({ results, useSearch: true });
  };

  _renderResults() {
    return this.state.results.length === 0 ? (
      <p>Sorry! don´t existe the movie</p>
    ) : (
      <MovieList movies={this.state.results} />
    );
  }
  render() {
    return (
      <div>
        <Title>Search Movie</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        <div>
          {this.state.useSearch ? (
            this._renderResults()
          ) : (
            <small>Usa el form para buscar una película</small>
          )}
        </div>
      </div>
    );
  }
}
