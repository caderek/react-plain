import wrapElement from './wrapElement'

describe('wrapElement', () => {
  it('wraps React.createElement so you can use html tags as functions', () => {
    const div = wrapElement('div')

    expect(typeof div).toEqual('function')
  })

  it('wrapped element, when executed, creates React DOM element', () => {
    const div = wrapElement('div')

    const myDiv = div({ class: 'hello' }, 'Some text')

    expect(myDiv.type).toEqual('div')
    expect(myDiv.props).toEqual({ class: 'hello', children: 'Some text' })
  })
})
