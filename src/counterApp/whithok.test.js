import { render, screen } from '@testing-library/react';
// import Fechdata from './fechdata';
import WhitHookRedux from './whitHookRedux';
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
  render(<WhitHookRedux /> ); 
  const linkElement = screen.getByText(/Que contiene redux/i);
  expect(linkElement).toBeInTheDocument();
});