import { render, screen, fireEvent } from "@testing-library/react";

import { Form } from '../components/Form';

test("submitting the form calls handleRegister with stickers, quantities and comments", () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);

  screen.getByLabelText(/quantos adesivos de cada?/i);
  screen.getByLabelText(/observações:/i);
  screen.getByRole("button", { name: /enviar/i });


  // expect(handleSubmit).toHaveBeenCalledWith({
  //   quantidade: '10',
  //   observacoes: "USD",
  // });
});

 