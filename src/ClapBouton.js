import React , { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';
function ClapBouton({ start }) {
  const [clapCount, setClapCount] = useState(start || 0);

  const handleClick = () => {
    if (clapCount < 20) {
      setClapCount(clapCount + 1);
    }
  };

  return (
    <div className="clapbutton">
        <div className="clapcount"> +{clapCount}</div>
      <button onClick={handleClick}><FontAwesomeIcon icon={faHandsClapping} height={20} /></button>
      
    </div>
  );
}

export default ClapBouton;
