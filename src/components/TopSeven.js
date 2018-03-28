import React, { Component } from 'react';
import TopSevenCard from './TopSevenCard'

const stories = [{
  title: "This is the greatest article ever written.",
  author: "Kanye West",
  image: "https://amp.businessinsider.com/images/575530dc52bcd029008c6fcf-750-563.jpg"
}]

export default class TopSeven extends Component {
  render() {

    const storiesDisplay = stories.map((story, i) => {
      return <TopSevenCard story={story} index={i} />
    })

    return (
      <div className="toppest">
        {storiesDisplay}
      </div>
    );
  }
}