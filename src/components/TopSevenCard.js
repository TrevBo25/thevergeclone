import React from 'react';
import propTypes from 'prop-types';

const classNamesArr = ['bigleft', 'lilright', 'lilleft', 'bigright', 'medleft', 'medmid', 'medright']

const TopSevenCard = ({story, index}) => {
  return (
    <div className={classNamesArr[index]} >
      <div className="leftside" >
        <img src={story.image} alt={`The image for the story ${story.title}`} className="picture" />
      </div>
      <div className="rightside" >
        <h1 className="title" >{story.title.toUpperCase()}</h1>
        <p className="author" >BY {story.author.toUpperCase()}</p>
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