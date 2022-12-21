import {useRef, useEffect, FC} from 'react';
import Typed from 'typed.js';

interface hookProps {
 stringArray: string[],
 typingSpeed: number,
 backingSpeed: number,
 animationLoop: boolean
}

const TypedReactAnimation: FC<hookProps> = ({stringArray, typingSpeed, backingSpeed, animationLoop}) => {
 // Create reference to store the DOM element containing the animation
 const el = useRef(null);
 // Create reference to store the Typed instance itself
 const typed = useRef(null);

 useEffect(() => {
   const options = {
     strings: stringArray,
     typeSpeed: typingSpeed,
     backSpeed: backingSpeed,
     loop: animationLoop
   };

   // Assign the DOM element to the current property of the el ref object
   el.current = document.querySelector('.type-wrap > span');

   // Assign the new Typed instance to the current property of the typed ref object
   typed.current = new Typed(el.current, options);

   return () => {
     // Make sure to destroy Typed instance during cleanup
     // to prevent memory leaks
     typed.current.destroy();
   };
 }, []);

 return (
   <div className="wrap">
     <h1>Typed.js</h1>

     <div className="type-wrap">
       <span style={{ whiteSpace: 'pre' }} ref={el} />
     </div>
   </div>
 );
};

export default TypedReactAnimation