import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormKeluhan from './pages/FormKeluhan'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormKeluhan />
  </StrictMode>,
)
