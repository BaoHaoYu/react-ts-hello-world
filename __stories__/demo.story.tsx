import React from 'react'
import { Demo } from '~/index'

export const DemoStory = () => {
  return (
    <div>
      <Demo msg={'story'} />
    </div>
  )
}

export default {
  title: 'Welcome',
  component: DemoStory,
}

DemoStory.story = {
  name: 'demo Storybook',
}
