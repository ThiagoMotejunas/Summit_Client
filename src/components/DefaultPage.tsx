import React from 'react'

interface DefaultPageProps{
    children: React.ReactNode;
}

const DefaultPage:React.FC<DefaultPageProps> = ({children}) => {
  return (
    <div className='w-screen min-h-full px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50/7D'>
        {children}
    </div>
  )
}

export default DefaultPage