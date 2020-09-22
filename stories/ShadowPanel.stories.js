import React from 'react'

import { ShadowPanel } from '../components/ShadowPanel'

export default {
  title: 'Example/ShadowPanel',
  component: ShadowPanel
}

const Template = (args)=> <ShadowPanel {...args}></ShadowPanel>

export const Default = Template.bind({})