import{render,screen} from "@testing-library/react";
import Post  from './../Post';
import { Provider } from "react-redux";
import store from './../../Redux/Store/store';

describe("Test the Post Component",()=>{
    test("render post test with post text",async()=>{
        render(<Provider store={store}><Post/></Provider>);
        const buttonList= await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(2);
    });
  });