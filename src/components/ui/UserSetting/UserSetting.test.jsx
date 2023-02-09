// Node Modules
import { screen } from "@testing-library/react";

// Helper functions
import { renderWithAllProviders } from "../../../utils/renders";

// Components
import UserSetting from ".";

describe("UserSetting component rendering", () => {
  it("renders UserSetting component", () => {
    renderWithAllProviders(<UserSetting />);

    screen.debug();
  });

  it("display the menu bar", () => {
    renderWithAllProviders(<UserSetting />);

    // Find the menu bar
    expect(screen.getByRole("menubar")).toBeInTheDocument();

    // Find the home icon, home heading, and expand more button
    expect(screen.getByRole("img", { name: /user icon/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 4, name: /username/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /expand more icon/i })
    ).toBeInTheDocument();
  });

  it("display the menu item when the expand more icon is clicked", async () => {
    const { user } = renderWithAllProviders(<UserSetting />);

    // Find the hidden menu item
    expect(screen.queryByRole("menuitem", { hidden: true }));

    // Wait for user to click the expand more icon
    await user.click(screen.getByRole("img", { name: /expand more icon/i }));

    // Find the user icon, username heading
    expect(screen.getByRole("img", { name: /user icon/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 4, name: /user/i })
    ).toBeInTheDocument();

    // Find the expand less button, dark mode headhing, and dark mode switch
    expect(screen.getByRole("menuitem", { hidden: false })).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /expand less icon/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /dark mode/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it.todo("display the dark mode when the dark mode switch is enabled");
});
