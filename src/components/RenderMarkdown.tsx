import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';


interface RanderMarkdownInfo {
  /**
 * File to render as markdown
 * Should be imported like:
 * 
 *  `import markdownFile from '../privacy-policy.md';`
 */
  mdFile: string
}
export const RenderMarkdown = (md: RanderMarkdownInfo) => {
  console.log(md.mdFile)

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`${md.mdFile}`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [md.mdFile]);

  return (
    <>
      <ReactMarkdown children={markdown} />
    </>
  );
};
