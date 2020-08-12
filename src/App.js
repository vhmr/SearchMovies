import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Title } from "./components/title";
import { SearchForm } from "./components/SearchForm";
import { MovieList } from "./components/MovieList";
import { Detail } from "./pages/Detail";

class App extends Component {
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
    const url = new URL(document.location);
    const hasId = url.searchParams.has("id");

    if (hasId) {
      return <Detail id={url.searchParams.get("id")} />;
    }

    return (
      <div className="App">
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

export default App;
