import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center">
      <header className="py-8">
        <Navbar />
      </header>
      <main className="flex-1 flex w-full justify-center items-start">
        <Outlet />
      </main>
      <footer className="py-8">
        <Footer />
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
