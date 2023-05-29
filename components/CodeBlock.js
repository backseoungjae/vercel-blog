import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { rainbow } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const CopyButton = ({ target }) => {
  const handleClick = async () => {
    if (target) {
      try {
        await navigator.clipboard.writeText(target)
        alert('copied')
      } catch (err) {
        alert(`copy failed ${err}`)
      }
    }
  }

  return (
    <button
      onClick={handleClick}
      className="absolute right-0.5 top-0.5 rounded-lg px-2 bg-white dark:text-gray-800"
    >
      copy
    </button>
  )
}

export default function CodeBlock({ children }) {
  return (
    <div className="relative">
      <CopyButton target={children} />
      <SyntaxHighlighter showLineNumbers style={rainbow}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
