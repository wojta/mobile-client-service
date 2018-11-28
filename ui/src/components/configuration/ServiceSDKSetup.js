import React from 'react';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';

const parseHtml = htmlParser({
  isValidNode: node => node.type !== 'script',
  processingInstructions: [
    /* ... */
  ]
});

export const ServiceSDKSetup = ({ docs = {} }) => {
  const { introduction, commands } = docs;
  return (
    <li>
      {introduction ? <h4>{introduction}</h4> : <React.Fragment />}
      <ul>
        {commands ? (
          commands.map((commandHelp, index) => {
            const simpleString = typeof commandHelp === 'string';
            const command = simpleString ? '' : commandHelp[1];
            return (
              <li>
                {simpleString ? commandHelp : commandHelp[0]}
                <ReactMarkdown source={command} escapeHtml={false} astPlugins={[parseHtml]} />
              </li>
            );
          })
        ) : (
          <React.Fragment />
        )}
      </ul>
    </li>
  );
};
