import * as React from 'react'

const wrapElement = (name) => {
  return (options, ...children) => {
    return React.createElement(name, options, ...children)
  }
}

export default wrapElement
