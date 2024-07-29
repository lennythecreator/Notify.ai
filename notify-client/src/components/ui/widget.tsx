import React from 'react'

type WidgetProps = {
    children: React.ReactNode
}
export const Widget = (props:WidgetProps) => {
  return (
    <div className='w-full h-full m-5 p-4 rounded-[12px] bg-white'>{props.children}</div>
  )
}
