import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import {store} from "../app/store"; 
import App from "../App";

test('renders content', () => {

    const component = render(
        <Provider store={store}>
            <App/>
        </Provider>
    )

   //component.getByText('Busca tu pelicula....');
   //expect(component.container).toHaveTextContent('camiones');
   
});
