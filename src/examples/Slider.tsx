import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Slider from "@radix-ui/react-slider";

export default function App() {
  return (
    <Slider.Root
      defaultValue={[50]}
      max={100}
      step={1}
      aria-label="Volume"
      style={{ position: "relative", height: 10, background: "lightgrey", width: 300, display: "block" }}
    >
      <Slider.Track>
        <Slider.Range
          style={{
            position: "absolute",
            height: "100%",
            backgroundColor: "#666",
          }}
        />
      </Slider.Track>
      <Slider.Thumb
        style={{
          width: 10,
          height: 10,
          backgroundColor: "black",
          display: "block",
        }}
      />
    </Slider.Root>
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
      editorHeight: 400,
      editorWidthPercentage: 60,
    }}
    customSetup={{
      dependencies: {
        "@radix-ui/react-slider": "latest",
      },
    }}
  />
);
export default Example;
