import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Accordion from "@radix-ui/react-accordion";

export default function App() {
  return (
    <Accordion.Root type="single" defaultValue="option-2">
      <Accordion.Item value="option-1">
        <Accordion.Header asChild>
          <Accordion.Trigger>Option 1</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          voluptates ea aspernatur! Nesciunt culpa officiis, assumenda
          sequi, odit debitis, eos natus minima doloremque nemo vel sunt
          iste id at cupiditate.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="option-2">
        <Accordion.Header asChild>
          <Accordion.Trigger>Option 2</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          voluptates ea aspernatur! Nesciunt culpa officiis, assumenda
          sequi, odit debitis, eos natus minima doloremque nemo vel sunt
          iste id at cupiditate.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
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
        "@radix-ui/react-accordion": "latest",
      },
    }}
  />
);
export default Example;
