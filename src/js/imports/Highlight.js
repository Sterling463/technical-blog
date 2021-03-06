import React from 'react';
import { connectHighlight } from 'react-instantsearch-dom';
const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();
const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <span>
      {parsedHit.map(
        (part, index) =>
          part.isHighlighted ? (
            <mark key={index}>{entities.decode(part.value)}</mark>
          ) : (
            <span key={index}>{entities.decode(part.value)}</span>
          )
      )}
    </span>
  );
};

export default connectHighlight(Highlight);