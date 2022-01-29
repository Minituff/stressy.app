import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import markdownFile from '../privacy-policy.md';

export const PrivacyPolicy = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(markdownFile)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <>
      <ReactMarkdown children={markdown} />
    </>
  );
};
