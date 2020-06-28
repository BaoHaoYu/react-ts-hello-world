import React from 'react'

export function Demo(p: { msg: string }) {
  return (
    <div className={'Demo'}>
      <p className={'Demo__title'}>demo</p>
      <span>{p.msg}</span>
    </div>
  )
}
