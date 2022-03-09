import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as RadioGroup from "@radix-ui/react-radio-group";
import { styled } from "@stitches/react";

const RadioGroupIndicator = styled(RadioGroup.Indicator, {
  width: "10px",
  height: "10px",
  display: "inline-block",
  backgroundColor: "black",
  borderRadius: "50%",
});

export default function App() {
  return (
    <RadioGroup.Root defaultValue="one">
    <RadioGroup.Item value="one">
    <RadioGroupIndicator />
      One
    </RadioGroup.Item>
    <RadioGroup.Item value="two">
    <RadioGroupIndicator />
      Two
    </RadioGroup.Item>
  </RadioGroup.Root>
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
        "@radix-ui/react-radio-group": "latest",
        "@stitches/react": "latest",
      },
    }}
  />
);
export default Example;
