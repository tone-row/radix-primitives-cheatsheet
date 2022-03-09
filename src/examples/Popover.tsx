import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Popover from "@radix-ui/react-popover";

const popoverBackgroundColor = '#ddd';

export default function App() {
  return (
    <Popover.Root modal>
          <Popover.Trigger>Trigger</Popover.Trigger>
          <Popover.Content style={{backgroundColor: popoverBackgroundColor}}>
            This is the content
            <Popover.Close>Close</Popover.Close>
            <Popover.Arrow style={{fill: popoverBackgroundColor}} />
          </Popover.Content>
        </Popover.Root>
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
        "@radix-ui/react-popover": "latest",
      },
    }}
  />
);
export default Example;
