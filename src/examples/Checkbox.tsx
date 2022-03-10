import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Checkbox from "@radix-ui/react-checkbox";

export default function App() {
  return (
    <Checkbox.Root>
    <Checkbox.Indicator style={{width: 10, height: 10, backgroundColor: "black", display: "inline-block"}} />
      Checkbox Item
    </Checkbox.Root>
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
      editorHeight: 350,
      editorWidthPercentage: 60,
    }}
    customSetup={{
      dependencies: {
        "@radix-ui/react-checkbox": "latest",
      },
    }}
  />
);
export default Example;
