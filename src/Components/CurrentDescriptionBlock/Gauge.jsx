import { format } from 'd3-format'
import { scaleLinear } from 'd3-scale'
import { arc } from 'd3-shape'
import PropTypes from 'prop-types'
import React from 'react'

export const Gauge = ({
  value = 50,
  min = 0,
  max = 100,
  label,
  units,
  desc,
}) => {
  const backgroundArc = arc()
    .innerRadius(0.85)
    .outerRadius(1)
    .startAngle(-Math.PI / 1.8)
    .endAngle(Math.PI / 1.8)
    .cornerRadius(0)()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])
  const percent = percentScale(value)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 1.8, Math.PI / 1.8])
    .clamp(true)

  const angle = angleScale(percent)

  const filledArc = arc()
    .innerRadius(0.85)
    .outerRadius(1)
    .startAngle(-Math.PI / 1.8)
    .endAngle(angle)
    .cornerRadius(0)()

  const markerLocation = getCoordsOnArc(
    angle,
    1 - ((1 - 0.85) / 1.8),
  )

  return (
    <div
      style={{ textAlign: 'center' }}
    >
      <svg
        style={{ overflow: 'visible' }}
        width="8em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(' ')}
      >
        <defs />
        <path
          d={backgroundArc}
          fill="#919191"
        />
        <path
          d={filledArc}
          fill="#ffffff"
        />
        <circle
          cx={markerLocation[0]}
          cy={markerLocation[1]}
          r="0.1"
          stroke="#919191"
          strokeWidth="0.01"
          fill="#ffffff"
        />
        <path
          d="M0.136364 0.0290102C0.158279 -0.0096701 0.219156 -0.00967009 0.241071 0.0290102C0.297078 0.120023 0.375 0.263367 0.375 0.324801C0.375 0.422639 0.292208 0.5 0.1875 0.5C0.0852272 0.5 -1.8346e-08 0.422639 -9.79274e-09 0.324801C0.00243506 0.263367 0.0803571 0.120023 0.136364 0.0290102ZM0.1875 0.381684C0.221591 0.381684 0.248377 0.356655 0.248377 0.324801C0.248377 0.292947 0.221591 0.267918 0.1875 0.267918C0.153409 0.267918 0.126623 0.292947 0.126623 0.324801C0.126623 0.356655 0.155844 0.381684 0.1875 0.381684Z"
          transform={`rotate(${
            angle * (180 / Math.PI)
          }) translate(-0.2, -0.33)`}
          fill="#ffffff"
        />
      </svg>

      <div style={{
        marginTop: '1em',
        fontSize: '1.2em',
        lineHeight: '1em',
        fontWeight: '900',
      }}
      >
        {format(',')(value)}
        {!!units && units}
      </div>

      {!!label && (
        <div style={{
          color: '#ffffff',
          marginTop: '0.3em',
          fontSize: '1.2em',
          lineHeight: '1.3em',
        }}
        >
          {label}
        </div>
      )}

      {!!desc && (
        <div style={{
          color: '#ffffff',
          lineHeight: '1.3em',
        }}
        >
          {desc}
        </div>
      )}
    </div>
  )
}

const getCoordsOnArc = (angle, offset = 10) => [
  Math.cos(angle - (Math.PI / 1.95)) * offset,
  Math.sin(angle - (Math.PI / 1.95)) * offset,
]

Gauge.propTypes = {
  value: PropTypes.number,
  min: PropTypes.string,
  max: PropTypes.string,
  label: PropTypes.string,
  units: PropTypes.string,
  desc: PropTypes.string,
}
