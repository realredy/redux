import { render, screen } from '@testing-library/react';
import App from './App'; 
/**
 * [renders learn react link] > este es el nombre del
 * test que se mostrara, en este una breve descripcion
 * de lo que esperamos de este test \
 * ?--------------------------------------------------
 * render(<App />);
 * ---------------------------------------------------
 * Render le indica que este es el módulo que será eva-
 * luado en el test
*/
test('my first test, testing fechdata', () => {
  render( <App/> ); 
  const linkElement = screen.getByText(/React/i);
  expect(linkElement).toBeInTheDocument();
});

 