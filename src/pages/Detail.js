import React, { Component } from "react";
import PropTypes from "prop-types";

const API_KEY = "2e0d12d1";

export class Detail extends Component {
  static propTypes = {
    id: PropTypes.string,
  };

  state = { movie: {} };

  _fecthMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((movie) => {
        console.log(movie);
        this.setState({ movie });
      });
  }

  _goback() {
    window.history.back();
  }

  componentDidMount() {
    const { id } = this.props;
    this._fecthMovie({ id });
  }

  render() {
    const { Title, Actors, Poster, Metascore, Plot } = this.state.movie;
    return (
      <div>
        <button onClick={this._goback}>Volver</button>
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}