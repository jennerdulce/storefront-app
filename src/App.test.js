import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

let electronicData = [
  { item: 'TV', cost: 698, stock: 1849, image: 'TV.jpg', category: 'electronics' },
  { item: 'Monitor', cost: 100.99, stock: 854, image: 'Monitor.jpg', category: 'electronics' },
  { item: 'Mouse', cost: 50, stock: 944, image: 'Mouse.jpg', category: 'electronics' },
  { item: '1TB USB', cost: 49.99, stock: 238, image: 'USB.jpg', category: 'electronics' },
  { item: 'Keyboard', cost: 89.99, stock: 956, image: 'Keyboard.jpg', category: 'electronics' }
];

let foodData = [
  { item: 'Calzones', cost: 16.99, stock: 200, image: 'Calzone.jpg', category: 'food' },
  { item: 'Apples', cost: 1.99, stock: 999, image: 'Apple.jpg', category: 'food' }
];
const server = setupServer(

  // Get Request Works
  rest.get(`https://storefront-db.herokuapp.com/api/v1/electronics`, (req, res, ctx) => {
    let response1 = electronicData
    return res(ctx.json(response1));
  }),

  rest.get(`https://storefront-db.herokuapp.com/api/v1/food`, (req, res, ctx) => {
    let response2 = foodData
    
    return res(ctx.json(response2));
  })
)

beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Renders all initial data', async () => {
  render(<App />);

  await waitFor(() => {
    screen.getByText('Our Store');
    screen.getByText('Browse our Categories');
    screen.getByText('React = Redux + Material UI');
  })
});

test('Renders all electonic data when category has been clicked', async () => {
  render(<App />);
  const electronicButton = screen.getByTestId('electronics');
  fireEvent.click(electronicButton);

  await waitFor(() => {
    const items = screen.getAllByLabelText('list-item');
    // expect(items.length).toBe(5)
  })
})

xtest('Renders all food data when category has been clicked', async () => {
  render(<App />);
  const foodButton = screen.getByTestId('food');
})

// header-title
// cart-button
// footer