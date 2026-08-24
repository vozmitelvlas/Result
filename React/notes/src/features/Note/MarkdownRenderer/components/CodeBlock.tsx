import type {HTMLAttributes} from "react";
import type {ExtraProps} from "react-markdown";
import {Highlight, themes} from "prism-react-renderer";

type CodeBlockProps = HTMLAttributes<HTMLElement> & ExtraProps;

export const CodeBlock = ({children, className}: CodeBlockProps) => {
    const match = /language-(\w+)/.exec(className || "");
    if (!match) {
        return <code>{children}</code>;
    }

    const language = match[1];
    const code = String(children).replace(/\n$/, "");


    return (
        <Highlight theme={themes.github} code={code} language={language}>
            {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
              }) => (
                <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({line})}>
                                    <span>{i + 1} </span>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({token})}/>
                                    ))}
                                </div>
                            ))}
                        </pre>
            )}
        </Highlight>
    );
};