import React, { useState } from 'react'

export default function Count() {

   const [count, setCount] = useState(0);

   const handleKeyPress = (event) => {
      console.log(event.key)
      if (event.key === "a") {
         setCount(count - 1);
      } else if (event.key === "s") {
         setCount(count + 1);
      }
   }

   return (
      <div className='count' onKeyDown={handleKeyPress} tabIndex="0">
         {count}
      </div>
   )
}
