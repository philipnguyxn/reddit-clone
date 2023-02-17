// Node Modules
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Pages
import CreatePost from '../pages/CreatePostPage/CreatePost'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from '../pages/HomePage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} errorElement={<ErrorPage />}>
        <Route path="/submit" element={<CreatePost />} />
      </Route>
    </Routes>
  )
}

export default App
