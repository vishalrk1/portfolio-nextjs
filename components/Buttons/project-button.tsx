import { FolderOpen, User } from 'lucide-react'
import React from 'react'

const ProjectButton: React.FC = () => {
  return (
    <button className="flex border-primary border-2 justify-center items-center rounded-md px-6 py-2 gap-2 hover:bg-primary transition-all">
        <p className="font-semibold text-sm md:text-[16px] text-white tracking-wider">Projects</p>
        <FolderOpen size={24} color='white'/>
    </button>
  )
}

export default ProjectButton