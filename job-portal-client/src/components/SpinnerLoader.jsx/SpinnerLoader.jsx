import React, { useEffect, useState } from "react";

export default function SPLoader() {
  const [text, setText] = useState('');
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setText('I waited for 3 seconds to be loaded, did you see the spinner?');
      setShowImg(true);
    }, 3000);
  }, []);

  return (
    <div>
      {showImg ? <img src="./sp.svg" alt="spinner" /> : <h3>{text}</h3>}
    </div>
  );
}
