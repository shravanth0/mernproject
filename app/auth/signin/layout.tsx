import React from "react"
export default function ( { children }: {children: React.ReactNode}) {
    
  return (<div>
    <div className="p-4 border-b">layout</div>
    { children }
    </div>
  )
  }
