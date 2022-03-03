import {useState} from 'react'
import {motion} from 'framer-motion'
import './index.scss'

const mockData = [
  {
    id: 0,
    description:
      'Notes: This layout is proposed to join other homepage testing cohorts proposed by the team.  In this scenario Amira does her intro and the lesson is fully simulated below.  Click to continue.',
    content:
      'Duck is stuck in the muck.  A pup can tug on the duck. But duck is stuck. A cub can tug on Duck.',
    button1Text: '',
    button2Text: 'Continue',
  },
  {
    id: 1,
    description:
      'The visitor is free to enjoy Amira immediately, and understands what it is and does.  The barrier of having to read marketing copy or register first is removed.  Existing marketing sections remain below. Click to continue.',
    content: 'Continued Lesson content',
    button1Text: 'Try again',
    button2Text: 'Continue',
  },

  {
    id: 2,
    description:
      'Optionally we can interleave marketing content in this section, alternating with lessons that solve visitor concerns and unknowns before making their decision to buy.  The leaderboard is retained at right to prove that Amira is active and popular. Click to continue.',
    content: 'Scoring, Testimonials, etc.',
    button1Text: 'Start Over',
    button2Text: 'Continue',
  },

  {
    id: 3,
    description:
      'This test layout would be built mobile-responsive but will still allow desktop visitors to enjoy the working demo.  Other features can fly in here as well.  Click to continue.',
    content: 'Tutorial results',
    button1Text: 'Start Over',
    button2Text: 'Continue',
  },

  {
    id: 3,
    description:
      "This concept is my reaction as a first-time visitor to the website, where it wasn't immediately clear specifically what Amira is and does.  The simple elegance of how it works is the main benefit to me and I would register after using a demo.",
    content: 'Another Tutorial example',
    button1Text: 'Start Over',
    button2Text: "That's it!",
  },
]

const ReadingWindowItem = () => {
  const [sliceOne, setSliceOne] = useState(0)
  const [sliceTwo, setSliceTwo] = useState(1)

  const handleStartOver = () => {
    setSliceOne(0)
    setSliceTwo(1)
  }

  const handleNext = () => {
    if (sliceTwo < mockData.length) {
      setSliceOne(sliceOne + 1)
      setSliceTwo(sliceTwo + 1)
    } else {
      handleStartOver()
    }
  }

  return mockData.slice(sliceOne, sliceTwo).map(item => (
    <div key={item.id} className="reading-screen">
      {/* <div className="description-section">{item.description}</div> */}

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay: 0.5,
          duration: 0.3,
        }}
        className="description-section"
      >
        {item.description}
      </motion.div>

      <motion.div
        initial={{scaleY: 0}}
        animate={{scaleY: 1}}
        transition={{
          duration: 0.3,
          type: 'spring',
          bounce: 0.3,
        }}
        className="content-section"
      >
        {item.content}
      </motion.div>

      <motion.div
        initial={{scaleY: 0}}
        animate={{scaleY: 1}}
        transition={{
          ease: 'easeOut',
          duration: 0.3,
        }}
        className="button-row"
      >
        {item.button1Text.length > 0 && (
          <button
            type="button"
            className="button back"
            onClick={() => {
              handleStartOver()
            }}
          >
            {item.button1Text}
          </button>
        )}
        <button
          type="button"
          className="button"
          onClick={() => {
            handleNext()
          }}
        >
          {item.button2Text}
        </button>
      </motion.div>
    </div>
  ))
}

export default ReadingWindowItem
