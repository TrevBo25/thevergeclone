import React from 'react';
import propTypes from 'prop-types';

const TopSevenCard = ({story}) => {
  return (
    <div>
      <div>
        <img src={story.image} alt={`The image for the story ${story.title}`} />
      </div>
      <div>
        <h1>{story.title.toUpperCase()}</h1>
        <p>BY {story.author.toUpperCase()}</p>
      </div>
    </div>
  )
}

TopSevenCard.defaultProps = {
  story: {
    title: 'Here is a fake title',
    author: 'You wrote this',
    image: 'http://lewamack.com/Facebook/Pics/Oops-Error-Failure/Oops-Boo_Boo-Oops.jpg'
  }
}

TopSevenCard.propTypes = {
  story: propTypes.object.isRequired
}

export default TopSevenCard;