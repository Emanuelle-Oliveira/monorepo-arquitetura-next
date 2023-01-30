import HomeScreen from "./HomeScreen";
import { customRender } from "@project/test-commons/react-testing-library";

const render = customRender((props) => {
  return <section>{props.children}</section>;
});

describe("<HomeScreen/>", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen />);
    return expect(container).toMatchSnapshot();
  });
});
