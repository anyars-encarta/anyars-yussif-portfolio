import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../higher-order-component";
import { technologies } from "../constants";
import { useState } from "react";


const Tech = () => {
  const [showName, setShowName] = useState('-');

  const handleHover = (techName) => {
    setShowName(techName);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='mb-10 text-secondary text-[24px] font-bold'>
        {showName}
      </p>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {
          technologies.map((technology) => (
            <div
              className='w-28 h-28'
              key={technology.name}
              onMouseEnter={() => handleHover(technology.name)}
              onMouseLeave={() => setShowName('-')}
            >
              <BallCanvas icon={technology.icon} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "");