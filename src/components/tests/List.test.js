import { render, screen, waitFor } from "@testing-library/react";
import List from "../List";
import { convertList } from "../../utils/tree";
import apiData from "../../api-data.json";
import userEvent from "@testing-library/user-event";

const mockData = convertList(apiData);

describe("List", () => {

  test("renders list", () => {
    render(<List data={mockData} />);
    const exp = new RegExp(mockData[0].title, "i");
    expect(screen.getByText(exp)).toBeInTheDocument();
  });

  test('user clicks on a dropdown item', () => {

    const {container} = render(<List data={mockData} />);
    const c = 'li.has-child';
    

    // show an ul list
    const link1 = container.querySelector(c + '.hide > div');
    userEvent.click(link1);

    const ul1 = container.querySelector(c + '.show > ul');
    expect(ul1).toBeInTheDocument();

    
    // hide an ul list
    const link2 = container.querySelector(c + '.show > div');
    userEvent.click(link2);

    const ul2 = container.querySelector(c + '.show > ul');
    expect(ul2).not.toBeInTheDocument()
  })

});
