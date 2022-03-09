import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Progress from "@radix-ui/react-progress";

const value = 75;

export default function App() {
  return (
    <Progress.Root value={value} max={100} style={{position: "relative", width: 300,
    height: 25, backgroundColor: "lightgrey"}}>
      <Progress.Indicator style={{height: "100%", backgroundColor: "grey", width: value + "%" }} />
    </Progress.Root>
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
        "@radix-ui/react-progress": "latest",
      },
    }}
  />
);
export default Example;
