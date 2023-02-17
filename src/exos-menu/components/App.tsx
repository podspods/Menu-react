import { StrictMode } from 'react'
import { AppGlobalStyle } from '../styles/App.style'
/**
 * main component for the application
 * @returns 
 * 
 */

export default function App() {
  return (
    <StrictMode>
      <AppGlobalStyle />
        <p>App.tsx</p>
    </StrictMode>

  )
}