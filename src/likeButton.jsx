import { useState } from "react";

export default function Likebutton() {

  const [count, setCount] = useState(false);

  function counter() {
    setCount(!count);   // Toggle true/false
  }

  return (
    <>
      <h2 onClick={counter}>
        <i 
          className={
            count 
              ? "fa-solid fa-thumbs-up" 
              : "fa-regular fa-thumbs-up"
          }
        ></i>
      </h2>
    </>
  );
}