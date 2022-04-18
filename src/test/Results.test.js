import React from "react";
import { render} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {store} from "../app/store"; 
import Results from "../views/Results";

test('renders content', () => {

    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <Results/> 
            </BrowserRouter>
        </Provider>
    )

});