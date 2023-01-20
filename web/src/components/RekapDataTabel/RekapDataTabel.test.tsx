import { render } from '@redwoodjs/testing/web'

import RekapDataTabel from './RekapDataTabel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RekapDataTabel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RekapDataTabel rekapDatas={[]} />)
    }).not.toThrow()
  })
})
