import {useRef, useEffect, FC} from 'react';
import Typed from 'typed.js';

interface typeAnimationProps {
 stringArray: string[],
 typingSpeed: number,
 backingSpeed: number,
 animationLoop: boolean,
 style: object
}

const TypedReactAnimation: FC<typeAnimationProps> = ({stringArray, typingSpeed, backingSpeed, animationLoop, style}) => {
 // Create reference to store the DOM element containing the animation
 const el = useRef(null as any);
 // Create reference to store the Typed instance itself
 const typed = useRef(null as any);

 useEffect(() => {
   const options = {
     strings: stringArray,
     typeSpeed: typingSpeed,
     backSpeed: backingSpeed,
     loop: animationLoop,
     style: style
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
 }, [animationLoop, backingSpeed, stringArray, typingSpeed, style]);

 return (
   <div className="wrap">
     <div className="type-wrap">
       <span style={style} ref={el} />
     </div>
   </div>
 );
};

export default TypedReactAnimation