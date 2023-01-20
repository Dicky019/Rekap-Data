// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof RekapDataTabel> = (args) => {
//   return <RekapDataTabel {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import RekapDataTabel from './RekapDataTabel'

export const generated = () => {
  return <RekapDataTabel rekapDatas={[]} />
}

export default {
  title: 'Components/RekapDataTabel',
  component: RekapDataTabel,
} as ComponentMeta<typeof RekapDataTabel>
