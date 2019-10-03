import { createElement } from 'react'

const wrapElement = (name) => {
  return (options, ...children) => {
    return createElement(name, options, ...children)
  }
}

export default wrapElement
