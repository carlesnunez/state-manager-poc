import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CardMovie extends Component {
  _limitCharacters = (text, limit = 100) => {
    return text && text.length > limit ? `${text.slice(0, limit)}...` : text
  }

  render() {
    const {movieId, posterPath, name, overview, action} = this.props

    return (
      <div className="mv-CardMovie">
        <div className="mv-CardMovie-inner">
          <figure className="mv-CardMovie-mediaWrapper">
            <img className="mv-CardMovie-media" src={posterPath} />
            <div className="mv-CardMovie-mediaOverlay" />
          </figure>

          <div className="mv-CardMovie-content">
            <h3 className="mv-CardMovie-name">{name}</h3>
            <p className="mv-CardMovie-overview">
              {this._limitCharacters(overview)}
            </p>

            <button
              className="mv-CardMovie-actionButton"
              type="button"
              onClick={() => action(movieId)}
            >
              more details
            </button>
          </div>
        </div>
      </div>
    )
  }
}

CardMovie.displayName = 'CardMovie'

CardMovie.propTypes = {
  posterPath: PropTypes.string,
  movieId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
}

CardMovie.defaultProps = {
  posterPath: 'http://lorempicsum.com/simpsons/360/180/3',
  action: movieId => console.log(movieId)
}

export default CardMovie
