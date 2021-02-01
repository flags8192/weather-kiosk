import React from 'react'
import { DualRing } from 'react-awesome-spinners'

const LoadingIndicator = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <DualRing color="#fff" sizeUnit="px" />
    </div>
  )
}

export default LoadingIndicator
