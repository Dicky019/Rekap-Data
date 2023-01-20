// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LandingPage> = (args) => {
//   return <LandingPage {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LandingPage from './LandingPage'

export const generated = () => {
  return <LandingPage />
}

export default {
  title: 'Components/LandingPage',
  component: LandingPage,
} as ComponentMeta<typeof LandingPage>
