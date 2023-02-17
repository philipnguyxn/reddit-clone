// Node Modules
import React from 'react'

// Icons
import { ReactComponent as User } from '../../assets/icons/user.svg'

const CreatePost = () => {
  return (
    <div className="flex items-center bg-secondary rounded h-create-post-section mb-5">
      <span className="mx-6">
        <User />
      </span>
      <input
        className="w-field--home-page h-field bg-field px-6 rounded-xl 
                  border-1 border-solid border-primary
                hover:border-field-hover mr-6 text-base focus:outline-0"
        type="text"
        placeholder="Create Post"
      />
    </div>
  )
}

export default CreatePost
