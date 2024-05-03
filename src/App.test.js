import { fireEvent, render, screen } from '@testing-library/react';
import HeaderNav from './componentsMainPage/header/headerNav';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderNav />,
    // errorElement: <Error404 />
  },
])
test('renders learn react link', () => {
  render(
    (<RouterProvider router={router} ></RouterProvider>)
    );
  expect(screen.queryByTestId("menu")).toBeNull();
  fireEvent.click(screen.getByTestId("menu-open"));
  expect(screen.queryByTestId("menu")).not.toBeNull();
  fireEvent.click(screen.getByTestId("menu-close"));
  expect(screen.queryByTestId("menu")).toBeNull();
});
