import React from 'react'
import './style.scss'

export function Demo(p: { msg: string }) {
  return (
    <div className={'Demo'}>
      <p className={'Demo__title'}>demo</p>
      <span className={'Demo__msg'}>{p.msg}</span>
    </div>
  )
}
