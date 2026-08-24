import {Blockquote, Box, Title} from "@mantine/core";
import ReactMarkdown from "react-markdown";
import {CodeBlock} from "./components";
import remarkGfm from "remark-gfm";

export const MarkdownRenderer = ({content}: { content: string }) => {
    return (
        <Box style={{lineHeight: "1.5"}}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({children}) => <Title order={1}>{children}</Title>,
                    h2: ({children}) => <Title order={2}>{children}</Title>,
                    blockquote: ({children}) => <Blockquote py="xs">{children}</Blockquote>,
                    code: CodeBlock
                }}
            >
                {content}
            </ReactMarkdown>
        </Box>
    );
};