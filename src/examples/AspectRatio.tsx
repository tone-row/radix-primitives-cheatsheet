import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as AspectRatio from "@radix-ui/react-aspect-ratio";

export default function App() {
  return (
    <div style={{ width: "300px" }}>
          <AspectRatio.Root ratio={4 / 3} asChild>
            <img
              src="http://placekitten.com/400/400"
              alt="Kitten"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </AspectRatio.Root>
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
      editorHeight: 360,
      editorWidthPercentage: 60,
    }}
    customSetup={{
      dependencies: {
        "@radix-ui/react-aspect-ratio": "latest",
      },
    }}
  />
);
export default Example;
