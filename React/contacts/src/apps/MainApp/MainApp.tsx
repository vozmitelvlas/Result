import React, {useState} from 'react';
import './MainApp.scss';
import {ThemeProvider} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
import {ContactDto} from 'src/types/dto/ContactDto';
import {FavoriteContactDto} from 'src/types/dto/FavoriteContactDto';
import {GroupDto} from 'src/types/dto/GroupDto';
import {CONTACTS, GROUPS} from 'src/__data__';
import {AppRouter} from "src/router";
import {Provider} from "react-redux";
import {store} from "src/redux";

export const MainApp = () => {
    const contactsState = useState<ContactDto[]>(CONTACTS);
    const favoriteContactsState = useState<FavoriteContactDto>([
        CONTACTS[0].id,
        CONTACTS[1].id,
        CONTACTS[2].id,
        CONTACTS[3].id
    ]);
    const groupContactsState = useState<GroupDto[]>(GROUPS);

    return (
        <Provider store={store}>
            <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
                <BrowserRouter>
                    <AppRouter
                        groupContactsState={groupContactsState}
                        contactsState={contactsState}
                        favoriteContactsState={favoriteContactsState}/>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
};
