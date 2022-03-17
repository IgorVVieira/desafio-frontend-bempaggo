import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import { Form } from '../components/Form';

test("submitting the form calls handleRegister with stickers, quantities and comments", () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);

  userEvent.type(screen.getByLabelText(/quantos adesivos de cada?/i), '10');
  userEvent.type(screen.getByLabelText(/observações:/i), 'teste');
  userEvent.click(screen.getByRole("button", { name: /enviar/i }));

  expect(handleSubmit).toHaveBeenCalledWith({
    quantidade: '10',
    observacoes: 'teste',
  });

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

 