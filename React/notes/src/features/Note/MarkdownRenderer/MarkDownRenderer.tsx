import {CodeBlock} from "./components/CodeBlock.tsx";
import {Blockquote, Box, Title} from "@mantine/core";
import {GrBlockQuote} from "react-icons/gr";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkDownRendererProps {
    content: string;
}

export const MarkdownRenderer = ({content}: MarkDownRendererProps) => {
    return (
        <Box style={{lineHeight: "1.5"}}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({children}) => <Title order={1}>{children}</Title>,
                    h2: ({children}) => <Title order={2}>{children}</Title>,
                    blockquote: ({children}) => <Blockquote
                        icon={<GrBlockQuote/>}
                        iconSize={20}
                        p="1px 10px">{children}
                    </Blockquote>,
                    code: CodeBlock
                }}
            >
                {content}
            </ReactMarkdown>
        </Box>
    );
};