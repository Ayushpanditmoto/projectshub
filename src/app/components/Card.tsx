import React from 'react'
import Image from 'next/image'

function Card() {
  return (
    <>
    <div className="flex flex-col overflow-hidden rounded-lg shadow-md"><div className="flex-shrink-0"><a href="/internet/gmail-auto-purge/27605/"><Image loading="lazy" className="h-40 w-full object-cover" width={300} height={200} src="https://source.unsplash.com/random/250x160?/internet/gmail-auto-purge/27605/" alt="How to Delete Older Emails in Gmail Automatically"/></a></div><div className="flex flex-1 flex-col justify-between bg-slate-50 py-5 px-4"><div className="flex-1"><p className="text-xs font-medium text-gray-500"><time dateTime="September 17, 2018">September 17, 2018</time></p><a className="mt-2 block" href="/internet/gmail-auto-purge/27605/"><p className="text-sm font-semibold leading-5 text-gray-700">How to Delete Older Emails in Gmail Automatically</p></a></div></div></div>
    </>
  )
}

export default Card