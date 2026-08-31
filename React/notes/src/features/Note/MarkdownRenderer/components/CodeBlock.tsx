import {Highlight, themes} from "prism-react-renderer";
import type {ExtraProps} from "react-markdown";
import type {HTMLAttributes} from "react";
import {useMantineColorScheme} from "@mantine/core";

export type CodeBlockProps = HTMLAttributes<HTMLElement> & ExtraProps;

export const CodeBlock = ({children, className}: CodeBlockProps) => {
    const {colorScheme} = useMantineColorScheme();
    const match = /language-(\w+)/.exec(className || "");
    if (!match) {
        return <code>{children}</code>;
    }

    const language = match[1];
    const code = String(children).replace(/\n$/, "");

    return (
        <Highlight theme={colorScheme === 'dark' ? themes.vsDark : themes.vsLight} code={code} language={language}>
            {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
              }) => (
                <pre className={className} style={{...style, overflowX: "auto", maxWidth: "100%"}}>
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