import{render,screen} from "@testing-library/react";
import { Provider } from "react-redux";
import store from './../../Redux/Store/store';
import Sidenav from '../Sidenav';
import {BrowserRouter as Router} from 'react-router-dom';
describe("Test the Sidenav Component",()=>{
    test("render post test with post text",async()=>{
        render(<Router><Provider store={store}><Sidenav/></Provider></Router>);
        const linkElement = screen.getByText(/Dashboard/i);
        expect(linkElement).toBeInTheDocument();
    });
  });