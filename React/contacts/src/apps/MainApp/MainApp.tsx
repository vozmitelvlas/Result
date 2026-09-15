import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'react-bootstrap';
import {AppRouter} from "src/router";
import {Provider} from "react-redux";
import {store} from "src/redux";
import './MainApp.scss';

export const MainApp = () => {

    return (
        <Provider store={store}>
            <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
};
