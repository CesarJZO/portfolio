import Markdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useColorScheme } from "../hooks";
import { LegacyRef } from "react";

import "./MarkdownArticle.css";

const MarkdownArticle = ({ children }: MarkdownArticleProps) => {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? oneDark : oneLight;

  return (
    <Markdown
      className="markdown"
      components={{
        div: ({ node, ...props }) => <article {...props} />,
        code(props) {
          const { children, className, node, ref, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");

          if (match) {
            return (
              <Prism
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={theme}
                role="code"
                ref={ref as LegacyRef<Prism>}
              />
            );
          } else {
            return (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          }
        },
      }}
    >
      {children}
    </Markdown>
  );
};

interface MarkdownArticleProps {
  children?: string;
}

export default MarkdownArticle;
