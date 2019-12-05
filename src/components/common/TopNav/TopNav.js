import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../../../actions/index'
import './styles.css'

const mapStateToProps = state => {
  return {
    topNavSelection: state.topNavSelection
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changeTopNav: selection => dispatch(actions.changeTopNav(selection))
  }
}

class TopNav extends Component {
  render () {
    const props = this.props
    return (
      <div className='TopNav'>
        <ul>
          <li
            onClick={() => { props.changeTopNav('STAT') }}
            className={
              props.topNavSelection === 'STAT'
              ? 'active' : ''}>STAT</li>
          <li
            onClick={() => { props.changeTopNav('INV') }}
            className={
            props.topNavSelection === 'INV'
            ? 'active' : ''}>INV</li>
          <li 
            onClick={() => { props.changeTopNav('DATA') }}
            className={
            props.topNavSelection === 'DATA'
            ? 'active' : ''}>DATA</li>
          <li 
            onClick={() => { props.changeTopNav('MAP') }}
            className={
            props.topNavSelection === 'MAP'
            ? 'active' : ''}>MAP</li>
          <li 
            onClick={() => { props.changeTopNav('RADIO') }}
            className={
            props.topNavSelection === 'RADIO'
            ? 'active' : ''}>RADIO</li>
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
