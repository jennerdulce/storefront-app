import React, {useState} from 'react'

export const ThemeContext = React.createContext()

function ThemeSettings(props) {
  const pageStyles = {
    background: '#F9F9F9',
    color: 'black',
    marginBottom: '1.5rem'
  }
  
  const [themeSettings] = useState(pageStyles);

  return (
    <>
      <ThemeContext.Provider value={themeSettings}>
        {props.children}
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeSettings
