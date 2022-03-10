import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Separator from "@radix-ui/react-separator";

export default function App() {
  return (
    <div><span>Thing One</span>
    <Separator.Root asChild>
      <span>-</span>
    </Separator.Root>
    <span>Thing Two</span>
    </div>
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
        "@radix-ui/react-separator": "latest",
      },
    }}
  />
);
export default Example;
