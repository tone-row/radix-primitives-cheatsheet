import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as ScrollArea from "@radix-ui/react-scroll-area";

export default function App() {
  return (
    <ScrollArea.Root
          style={{ width: "200px", height: "200px", overflow: "hidden" }}
        >
          <ScrollArea.Viewport style={{ width: "100%", height: "100%" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aut
            sapiente possimus quisquam. Obcaecati eaque reprehenderit, dolor
            culpa recusandae delectus, inventore, libero voluptates sed a
            consequuntur natus repudiandae praesentium est? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aut
            sapiente possimus quisquam. Obcaecati eaque reprehenderit, dolor
            culpa recusandae delectus, inventore, libero voluptates sed a
            consequuntur natus repudiandae praesentium est?
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical" style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 10,
            bottom: "var(--radix-scroll-area-corner-height)",
            backgroundColor: "lightgrey"
          }}>
            <ScrollArea.Thumb style={{background: "darkgrey"}} />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner />
        </ScrollArea.Root>
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
        "@radix-ui/react-scroll-area": "latest",
      },
    }}
  />
);
export default Example;
