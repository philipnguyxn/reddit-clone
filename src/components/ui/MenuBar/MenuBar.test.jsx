// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithAllProviders } from "../../../utils/renders";

// Components
import NavDropdown from ".";

describe("NavDropdown component rendering/navigating between routes", () => {
  it("renders NavDropdown component", () => {
    renderWithAllProviders(<NavDropdown />);

    screen.debug();
  });

  it("display the menu bar", () => {
    renderWithAllProviders(<NavDropdown />);

    // Find the menu bar
    expect(screen.getByRole("menubar")).toBeInTheDocument();

    // Find the home icon, home heading, and expand more button
    expect(screen.getByRole("img", { name: /home icon/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 4, name: /home/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /expand more icon/i })
    ).toBeInTheDocument();
  });

  it("display the menu item when the expand more icon is clicked", async () => {
    const { user } = renderWithAllProviders(<NavDropdown />);

    // Find the hidden menu item
    expect(screen.queryByRole("menuitem", { hidden: true }));

    // Wait for user to click the expand more icon
    await user.click(screen.getByRole("img", { name: /expand more icon/i }));

    // Find the home icon, home heading
    expect(screen.getByRole("img", { name: /home icon/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 4, name: /home/i })
    ).toBeInTheDocument();

    // Find the add icon, create post headhing, and expand less button
    expect(screen.getByRole("menuitem", { hidden: false })).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /expand less icon/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /add icon/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 4, name: /create post/i })
    ).toBeInTheDocument();
  });

  it("should redirect to create post route when that heading is clicked", async () => {
    // User initilzation when the NavDropdown is rendered at the submit route
    const { user } = renderWithAllProviders(<NavDropdown />, { route: "/submit" });

    // Wait for user to click the link in the menu item
    await user.click(screen.queryByRole("link"));

    // Find the add icon, create post headhing, and expand more button
    expect(screen.getByRole("img", { name: /add icon/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 4, name: /create post/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /expand more icon/i })
    ).toBeInTheDocument();
  });

  it("should redirect back to index route when that heading is clicked", async () => {
    // User initilzation when the NavDropdown is rendered at the index route
    const { user } = renderWithAllProviders(<NavDropdown />);

    // Wait for user to click the link in the menu item
    await user.click(screen.queryByRole("link"));

    // Find the home icon, home heading, and expand more button
    expect(screen.getByRole("img", { name: /home icon/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 4, name: /home/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /expand more icon/i })
    ).toBeInTheDocument();
  });
});
