import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {store} from "../app/store"; 
import Home from "../views/Home";
import {prettyDOM} from "@testing-library/dom"; 

test('renders content', () => {
    
    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <Home/> 
            </BrowserRouter>
        </Provider>
    )

    //const h22 = component.container.querySelector('h2');
    //console.log(prettyDOM(h22)); 
});

test('clicking the button calls event handler onnce', () => {
    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <Home/> 
            </BrowserRouter>
        </Provider>
    )
    //const button = component.getByText('Buscar')
    //fireEvent.click(button)

    //const title = component.getByText('Busca tu pelicula....');
    //expect(title).toBeInTheDocument();
});