import React, { Component } from 'react';
import TopSevenCard from './TopSevenCard'

const test = {
  title: "This is the best title",
  author: "Kanye West",
  image: "https://amp.businessinsider.com/images/575530dc52bcd029008c6fcf-750-563.jpg"
}

export default class TopSeven extends Component {
  render() {
    return (
      <div className="toppest">
        <TopSevenCard story={test} />
      </div>
    );
  }
}