import React, { createContext } from 'react'

// 1. create context
// 2. Provide data
// 3. Use data

export const ThemeDataContext = createContext(); //create data context

const ThemeContext = (props) => {
  return (
    <div>
      <ThemeDataContext.Provider value='Anurag Dubey'>
         {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
