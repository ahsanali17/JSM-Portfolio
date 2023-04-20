import {useRef, useEffect, FC} from 'react';
import Typed from 'typed.js';

interface typeAnimationProps {
 stringArray: string[],
 typingSpeed: number,
 backingSpeed: number,
 animationLoop: boolean
}

const TypedReactAnimation: FC<typeAnimationProps> = ({
  stringArray,
  typingSpeed,
  backingSpeed,
  animationLoop,
}) => {
  // Create reference to store the DOM element containing the animation
  const el = useRef<HTMLSpanElement | null>(null)
  // Create reference to store the Typed instance itself
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    const options = {
      strings: stringArray,
      typeSpeed: typingSpeed,
      backSpeed: backingSpeed,
      loop: animationLoop,
    }

    // Assign the DOM element to the current property of the el ref object
    if (el.current) {
      typed.current = new Typed(el.current, options)
    }

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      if (typed.current) {
        typed.current.destroy()
      }
    }
  }, [])

  return (
    <div className="wrap">
      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
    </div>
  )
}

export default TypedReactAnimation
