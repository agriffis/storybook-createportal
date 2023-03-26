import {createPortal} from 'react-dom'

const myDecorator = Story => {
  return (
    <>
      {createPortal(<p>Hello</p>, document.body)}
      <Story />
    </>
  )
}

export default myDecorator
