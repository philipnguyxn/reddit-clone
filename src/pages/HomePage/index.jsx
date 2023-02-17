// Node Modules
import React from 'react'

// Componets
import Header from '../../layouts/Header'
import Posts from '../../layouts/Posts'
import CreatePost from '../../layouts/CreatePost'
import Communities from '../../layouts/Communitites'

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="relative top-16 bg-primary w-full h-screen z-0">
        <div className="px-primary--x pt-primary--t grid grid-cols-4 gap-5">
          <div className="col-span-3">
            <CreatePost />
            <Posts />
          </div>
          <div className="content-start	justify-start block bg-secondary rounded">
            <Communities />
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
