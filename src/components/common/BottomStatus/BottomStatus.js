import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../../actions/index'
import './styles.css'

const mapStateToProps = state => {
  return {
    currentHealth: state.currentHealth,
    maxHealth: state.maxHealth
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changeTopNav: selection => dispatch(actions.changeTopNav(selection))
  }
}

class BottomStatus extends Component {
  render () {
    const props = this.props
    return (
      <div className='BottomStatus'>
        <div className='healthWrapper'>
          <span className='hp'>HP</span>
          <span className='hpRatio'>
            {`${props.currentHealth}/${props.maxHealth}`}
          </span>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomStatus)
