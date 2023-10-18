import Image from 'next/image';
import parse from 'html-react-parser';
import React from 'react'

interface ConvertBodyProps {
  contentHTML: string;
}

const ConvertBody: React.FC<ConvertBodyProps> = ({ contentHTML }) => {
  const options = {
    replace: (node: any) => { 
      if (node.name === 'img') {
        const src = node.attribs?.src;
        const alt = node.attribs?.alt;
        const width = node.attribs?.width;
        const height = node.attribs?.height;

        if (src) {
          return (
            <Image
              src={src}
              width={width}
              height={height}
              alt={alt}
              style={{ width: '100%', height: 'auto' }}
              sizes='(min-width: 768px) 768px, 100vw'
            />
          );
        }
      }
      return node;
    },
  };

  const contentReact = parse(contentHTML, options);

  return <>{contentReact}</>;
};

export default ConvertBody
