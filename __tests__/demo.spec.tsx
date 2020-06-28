import React from 'react'
import renderer from 'react-test-renderer'
import { Demo } from '../src'

describe('My Test Suite', () => {
  it('My Test Case', () => {
    const component = renderer.create(<Demo msg={'hello'} />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
})
