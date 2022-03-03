import React, {useState, useEffect} from 'react'
import ReadingWindowItem from '../ReadingWindowItem'
import './index.scss'

const mockData = [
  {
    id: 0,
    title: 'Amira',
    text: 'Text here',
  },
  {
    id: 1,
    title: 'Next thing',
    text: 'More Text here',
  },
]

const ReadingWindow = () => (
  <div className="reading-wrapper">
    {mockData.map(item => (
      <ReadingWindowItem key={item.id} {...item} />
    ))}
  </div>
)

export default ReadingWindow
