import Highlight, { defaultProps } from "prism-react-renderer";
import themeLight from "./themeLight";

const capitalize = (chars) => {
  return chars[0].toUpperCase() + chars.slice(1).toLowerCase();
}

const CodeBlockLight = ({ children }) => {
  const code = children.props.children.trim();
  const className = children.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);
  const language = matches?.groups?.lang || "";
  return (
    <div className="relative">
      <span className="text-xs absolute -top-2 right-2 text-moonlight select-none">
        {capitalize(language)}
      </span>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={themeLight}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlockLight;
