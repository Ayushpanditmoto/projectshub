import React from 'react'

function CenterLayout({
    children
}:{
    children: React.ReactNode
}) {
  return (
    <>
    <div className="container mx-auto p-7">
        <div className="flex flex-col items-center text-gray-600 min-h-screen py-2">
        {children}
        </div>       
        </div>
    </>
  )
}

export default CenterLayout