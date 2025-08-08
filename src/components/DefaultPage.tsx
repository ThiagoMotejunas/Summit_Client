import React from 'react'

interface DefaultPageProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

const DefaultPage: React.FC<DefaultPageProps> = ({ children, className, center}) => {
  return (
    <div className={`
      w-screen min-h-full px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50/7D 
      ${center ? 'flex justify-center items-center' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}

export default DefaultPage