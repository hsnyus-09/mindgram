import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MindMapPlatform from './mindmap-platform'
import { CommunityPage } from './CommunityPage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import PublicMapDetailPage from './PublicMapDetailPage';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MindMapPlatform />} />
        <Route path="/community" element={<MindMapPlatform communityOnly={true} />} />
        <Route path="/editor" element={<MindMapPlatform editorOnly={true} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/map/:id" element={<PublicMapDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
