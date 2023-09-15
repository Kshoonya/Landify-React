import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className={`component-container ${props.rootClassName} `}>
        <div className="component-div">
          <lottie-player
            src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
            speed="1"
            autoplay
            background="transparent"
          ></lottie-player>
        </div>
      </div>
      <style jsx>
        {`
          .component-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component-div {
            width: 300px;
            height: 300px;
          }

          @media (max-width: 1200px) {
            .component-container {
              height: 816px;
            }
            .component-div {
              width: 1200px;
              height: 796px;
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
