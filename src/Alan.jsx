import React, { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
const useAlan = () => {
    useEffect(() => {
        alanBtn({
            key: 'e4163576472b0375750a32415f2df5cf2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
              if (commandData.command === 'go:back') {
                // Call the client code that will react to the received command
              }
            }
        });
      }, []);
  return (
    <div>Alan</div>
  )
}

export default useAlan