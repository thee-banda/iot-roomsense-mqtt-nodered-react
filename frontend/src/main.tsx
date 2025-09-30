import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col">
        <header className="flex justify-center px-4 py-6 sm:py-8">
          <Navbar />
        </header>
        <main className="flex-1 w-full px-4 pb-10 sm:pb-16">
          <Outlet />
        </main>
        <footer className="flex justify-center px-4 py-6 sm:py-8">
          <Footer />
        </footer>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)