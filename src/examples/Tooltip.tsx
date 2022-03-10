import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Tooltip from "@radix-ui/react-tooltip";

const cardBackgroundColor = '#ddd';


export default function App() {
  return (
    <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger>A Nice Tooltip</Tooltip.Trigger>
      <Tooltip.Content style={{backgroundColor: cardBackgroundColor}}>
        <Tooltip.Arrow style={{fill: cardBackgroundColor}} />
        Good News!
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
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
      editorHeight: 620,
      editorWidthPercentage: 60,
    }}
    customSetup={{
      dependencies: {
        "@radix-ui/react-tooltip": "latest",
      },
    }}
  />
);
export default Example;
