import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'

const CurrentOtherBlock = (props) => {
  const { otherTemp } = useSelector((state) => state.weather)
  const { param } = props

  return (
    <>
      <div className="other-container">
        <div className={param === 'local' ? 'home-temperature' : 'home-temperature hide'}>
          Квартира
          {' '}
          {otherTemp.home}
          {' '}
          °C
        </div>
        <div className={param === 'local' ? 'basement-temperature' : 'basement-temperature hide'}>
          Подвал
          {' '}
          {otherTemp.basement}
          {' '}
          °C
        </div>
        <div className={param === 'local' ? 'heating-temperature' : 'heating-temperature hide'}>
          Отопление
          {' '}
          {otherTemp.heating}
          {' '}
          °C
        </div>
      </div>
    </>
  )
}

CurrentOtherBlock.propTypes = {
  param: PropTypes.string,
}

export default CurrentOtherBlock
