import React from 'react'

import PropTypes from 'prop-types'

const StatsCard = (props) => {
  return (
    <>
      <div className={`stats-card-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="stats-card-image"
        />
        <div className="stats-card-container1">
          <h1 className="Headline4">{props.number}</h1>
        </div>
      </div>
      <style jsx>
        {`
          .stats-card-container {
            width: 200px;
            margin: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .stats-card-image {
            width: 32px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
          }
          .stats-card-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .stats-card-root-class-name {
            top: 16px;
            flex: 1;
            left: 16px;
            width: auto;
            position: 0px;
          }
          .stats-card-root-class-name1 {
            width: auto;
          }
          .stats-card-root-class-name2 {
            width: auto;
          }
          .stats-card-root-class-name3 {
            top: 306px;
            left: 616px;
            width: auto;
            position: absolute;
          }
          .stats-card-root-class-name4 {
            top: 455px;
            left: 618px;
            width: auto;
            position: absolute;
          }
          .stats-card-root-class-name5 {
            top: 181px;
            left: 615px;
            width: auto;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

StatsCard.defaultProps = {
  number: '10',
  image_src: '/playground_assets/05.svg',
  description: 'Description',
  image_alt: 'image',
  rootClassName: '',
}

StatsCard.propTypes = {
  number: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default StatsCard
