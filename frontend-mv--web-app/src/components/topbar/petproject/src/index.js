import React, {Component} from 'react'
import PropTypes from 'prop-types'

const Logo = ({projectName='Pet project', author='Victor Ribero'}) => (
  <h1 className="mv-TopbarPetproject-logo">
    {projectName}
    <small className="mv-TopbarPetproject-author">{`by ${author}`}</small>
  </h1>
)

const MainNavigation = ({menu}) => {
  return(
    <nav className='mv-TopbarPetproject-mainNav'>
      <ul className='mv-TopbarPetproject-mainList'>
        {menu.length > 0 && menu.map((link, index) =>
          <MainNavLink key={index} {...link}/>
        )}
      </ul>
    </nav>
  )
}

const MainNavLink = ({path, displayName, isSelected}) => (
  <li className='mv-TopbarPetproject-mainNavItem'>
    <a className={`mv-TopbarPetproject-mainNavItemLink ${isSelected ? 'is-selected' : ''}`} href={path}>
      {displayName}
    </a>
  </li>
)

class TopbarPetproject extends Component {
  render () {
    return (
      <div className='mv-TopbarPetproject'>
        <div className='mv-TopbarPetproject-left'>
          <Logo/>
        </div>
        
        <div className='mv-TopbarPetproject-right'>
          <MainNavigation menu={this.props.menu}/>
        </div>
      </div>
    )
  }
}

TopbarPetproject.displayName = 'TopbarPetproject'

TopbarPetproject.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    })
  ).isRequired,
}


export default TopbarPetproject