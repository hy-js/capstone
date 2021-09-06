import React from 'react'
import Paragraph from './Paragraph'

export default function ParagraphList({ ingredients}) {
  const articleParagraphs = ingredients.map(paragraph => {
    return (
      <>
      <Paragraph key={paragraph.id} {...paragraph} />
      <br />
      </>
    )
  })
  return (
    <div id="text">
      {articleParagraphs}
    </div>
  )
}
