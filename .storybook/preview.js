import ThemeWrapper from '../src/components/atoms/ThemeWrapper'


export const decorators = [
  (Story) => (
    <ThemeWrapper>
      <div style={{ margin: '2rem' }}>
        <Story />
      </div>
    </ThemeWrapper>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}