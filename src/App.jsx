import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage'
import Resume from './components/Resume'
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
