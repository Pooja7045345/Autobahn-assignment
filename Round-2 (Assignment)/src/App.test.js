import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import store from './Redux/Store/store';
import AddPost from './AddPost';
import EditPost from './EditPost';
import {BrowserRouter as Router} from 'react-router-dom';
test('Test the dashboard page', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/All Posts/i);
  expect(linkElement).toBeInTheDocument();
});


test('Test the header component', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/CRUD/i);
  expect(linkElement).toBeInTheDocument();
});


describe("Test the Add Post Page",()=>{
  test("render post test with post button",async()=>{
      render(<Provider store={store}><AddPost/></Provider>);
      const buttonList= await screen.findAllByRole("button");
      expect(buttonList).toHaveLength(1);
  });
});

describe("Test the Edit Post Page",()=>{
  test("render post test with post button",async()=>{
      render(<Router><Provider store={store}><EditPost/></Provider></Router>);
      const buttonList= await screen.findAllByRole("button");
      expect(buttonList).toHaveLength(1);
  });
});

