// Node Modules
import React from 'react'

// Data
import communities from '../../data/communities'

// Components
import Community from '../Community'

const Communities = () => {
  return (
    <>
      <div className="mt-4">
        <span className="text-center">
          <h2>Communities</h2>
        </span>
      </div>
      {/* Community List */}
      <ul className="mt-6 px-5 list-none">
        {communities.map((community) => (
          <Community key={community.id} name={community.name} />
        ))}
      </ul>
    </>
  )
}

export default Communities
