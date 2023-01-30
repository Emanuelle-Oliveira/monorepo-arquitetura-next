import { Text } from "./index";
import { customRender } from "@project/test-commons/react-testing-library";

const render = customRender();

describe("<Text/>", () => {
  it("renders h1 tag", () => {
    const { container } = render(<Text tag="h1">Text</Text>);
    return expect(container).toMatchSnapshot();
  });
});
