import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Gemini from "assets/gemini.svg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "./aiAnswer.scss";

interface IAiAnswerProps {
    textMarkdown: string;
}

export const AiAnswer: React.FC<IAiAnswerProps> = ({ textMarkdown }) => {
    return (
        <div className="ai-answer">
            <img className="ai-answer__icon" src={Gemini} alt="" />
            <div>
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        code({ inline, className, children, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || "");

                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={dracula}
                                    PreTag="div"
                                    language={match[1]}
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {textMarkdown}
                </Markdown>
            </div>
        </div>
    );

}