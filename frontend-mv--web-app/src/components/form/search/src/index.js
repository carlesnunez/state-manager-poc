import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from '@schibstedspain/sui-atom-button'
import AtomHelpText from '@s-ui/react-atom-help-text'

const KEYCODE_ENTER = 13

class FormSearch extends Component {
  state = {
    search: ''
  }

  _handleOnInputChange = event => this.setState({search: event.target.value})

  _handleOnKeyUp = event => {
    if (event.keyCode === KEYCODE_ENTER) {
      this.props.action(this.state.search)
    }
  }

  render() {
    const {className, placeholder, action, helpText} = this.props

    return (
      <div className={`mv-FormSearch ${className}`}>
        <div className="mv-FormSearch-inner">
          <input
            type="text"
            value={this.state.search}
            onChange={this._handleOnInputChange}
            onKeyUp={this._handleOnKeyUp}
            placeholder={placeholder}
          />

          <Button
            title="Search results"
            type="primary"
            onClick={() => action(this.state.search)}
          >
            {this.props.buttonCopy}
          </Button>
        </div>

        {helpText && (
          <div className="mv-FormSearch-helpText-wrapper">
            <AtomHelpText text={helpText} />
          </div>
        )}
      </div>
    )
  }
}

FormSearch.displayName = 'FormSearch'

FormSearch.propTypes = {
  className: PropTypes.string.isRequired,
  buttonCopy: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  helpText: PropTypes.string
}

FormSearch.defaultProps = {
  buttonCopy: 'Search',
  placeholder: 'Look for movies'
}

export default FormSearch
