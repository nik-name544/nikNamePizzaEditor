const { PizzaForm } = require("./pizzaEditor")

describe("calculatePrice", () => {
  it("returns the sum price of all selected sandwich parts", () => {

    const { getByText } = render(<PizzaForm />);

    expectt(getByText("send")).toBeInTheDocument();
  })
})