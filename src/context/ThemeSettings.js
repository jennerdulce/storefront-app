import React, {useState} from 'react'

export const ThemeContext = React.createContext()

function ThemeSettings(props) {
  const pageStyles = {
    background: '#F9F9F9',
    color: 'black',
    marginBottom: '1.5rem'
  }
  

  
  const [themeSettings] = useState(pageStyles);
  const [showCart, setShowList] = useState('hidden');

  const contents = {
    themeSettings,
    showCart,
    setShowList
  }

  return (
    <>
      <ThemeContext.Provider value={contents}>
        {props.children}
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeSettings
