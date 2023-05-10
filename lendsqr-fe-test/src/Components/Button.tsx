

import './button.scss'

interface ButtonNopProps {
  name: string;
  coloredBg: boolean;
}

export const ButtonNoP = ({name, coloredBg, ...props}:ButtonNopProps) => {
  return (
    <>
      {
        coloredBg ? 
        <button type="submit" className="colored">
          {name}
        </button>
        :
        <button type="submit" className="white">
          {name}
        </button>

      }
    </>
    

    
  )
}