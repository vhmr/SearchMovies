import React, { Component } from "react";
import PropTypes from "prop-types";
import { ButtonBackHome } from "../components/ButtonBackHome";

const API_KEY = "2e0d12d1";

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  };

  state = { movie: {} };

  _fecthMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((movie) => {
        //console.log(movie);
        this.setState({ movie });
      });
  }

  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    this._fecthMovie({ id });
  }

  render() {
    const { Title, Actors, Poster, Metascore, Plot } = this.state.movie;
    return (
      <div>
        <ButtonBackHome />
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}
