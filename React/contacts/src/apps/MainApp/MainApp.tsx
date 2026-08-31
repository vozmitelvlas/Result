import React, {useState} from 'react';
import './MainApp.scss';
import {ThemeProvider} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
import {ContactDto} from 'src/types/dto/ContactDto';
import {FavoriteContactDto} from 'src/types/dto/FavoriteContactDto';
import {GroupDto} from 'src/types/dto/GroupDto';
import {DATA_CONTACT, DATA_GROUP_CONTACT} from 'src/__data__';
import {AppRouter} from "src/router";

export const MainApp = () => {
    const contactsState = useState<ContactDto[]>(DATA_CONTACT);
    const favoriteContactsState = useState<FavoriteContactDto>([
        DATA_CONTACT[0].id,
        DATA_CONTACT[1].id,
        DATA_CONTACT[2].id,
        DATA_CONTACT[3].id
    ]);
    const groupContactsState = useState<GroupDto[]>(DATA_GROUP_CONTACT);

    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
            <BrowserRouter>
                <AppRouter
                    groupContactsState={groupContactsState}
                    contactsState={contactsState}
                    favoriteContactsState={favoriteContactsState}/>
            </BrowserRouter>
        </ThemeProvider>
    );
};
