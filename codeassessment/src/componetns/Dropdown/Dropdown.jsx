import React from 'react';
import Chevron from '../Chevron/chevron';
import useData from '../../hooks/useData';

import { useStateContext } from '../../contexts/ContextProvider';

import './dropdown.scss';

const Dorpdown = () => {
  const { isOpen, handleIsOpen, opionTitle, handleChange, setcardData } = useStateContext();

    const options = useData();
    options.sort((a, b) => a.order - b.order);
    setcardData(options)

    return (
        <div className="select-options-div">
        <div className="option-title" onClick={handleIsOpen}>{opionTitle}<Chevron className="icon" isOpen={isOpen} /></div>
        <div className={!isOpen ? "opions" : ""}>
            {options.map((option, index)=>(
                <div className="opion-input" key={option.id}>
                  {
                  (index === 0)
                  ? <input type="radio" id={option.shortTitle} name="photoOption" value={option.title} onChange={event => handleChange(event)}  defaultChecked/>
                  : <input type="radio" id={option.shortTitle} name="photoOption" value={option.title} onChange={event => handleChange(event)}  />
                  }
                  <label for={option.shortTitle}>{option.shortTitle}</label>
                </div>
            ))}
        </div>
      </div>
    )
}

export default Dorpdown