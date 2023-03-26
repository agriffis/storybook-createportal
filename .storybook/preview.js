import myDecorator from './my-decorator'

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [myDecorator],
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
