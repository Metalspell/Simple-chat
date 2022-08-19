import React from 'react';

const typingIndicatorContext = React.createContext()
export default typingIndicatorContext;

export const TypingIndicatorProvider = ({ children }) => {
  const [typingStatus, setTypingStatus] = React.useState(false);

  return (
    <typingIndicatorContext.Provider value={[typingStatus, setTypingStatus]}>
      {children}
    </typingIndicatorContext.Provider>
  )
}
