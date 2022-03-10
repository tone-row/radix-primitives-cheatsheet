import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as HoverCard from "@radix-ui/react-hover-card";

const cardBackgroundColor = '#ddd';

export default function App() {
  return (
    <HoverCard.Root>
          <HoverCard.Trigger>Trigger Hover Card</HoverCard.Trigger>
          <HoverCard.Content style={{backgroundColor: cardBackgroundColor}}>
            Hover Card Content
            <HoverCard.Arrow style={{fill: cardBackgroundColor,}} />
          </HoverCard.Content>
        </HoverCard.Root>
  );
}
`;

const Example = () => (
  <CustomSandpack
    files={{
      "/App.js": prettier.format(code.trim(), {
        parser: "babel",
        plugins: [babel],
      }),
    }}
    options={{
      editorHeight: 300,
      editorWidthPercentage: 60,
    }}
    customSetup={{
      dependencies: {
        "@radix-ui/react-hover-card": "latest",
        "@stitches/react": "latest",
      },
    }}
  />
);
export default Example;
