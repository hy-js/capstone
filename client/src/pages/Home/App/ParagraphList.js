import React from 'react'
import Paragraph from './Paragraph'

export default function ParagraphList({ paragraphs}) {
  const articleParagraphs = paragraphs.map(paragraph => {
    return (
      <>
      <Paragraph key={paragraph._id} {...paragraph} />
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
