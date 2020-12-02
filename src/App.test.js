import App from './App';
import { shallow } from "enzyme";
describe("Testpage Component", () => {
  it("should render without throwing an error", () => {
      const component =shallow(
              <App /> )
      expect(component).toBeDefined();
  });
});