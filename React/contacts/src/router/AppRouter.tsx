import {Route, Routes} from "react-router-dom";
import {MainLayout} from "src/layouts";
import {ContactListPage, ContactPage, FavoriteListPage, GroupListPage, GroupPage} from "src/pages";
import {CommonPageProps} from "src/pages/types";

export const AppRouter = ({contactsState, favoriteContactsState, groupContactsState}: CommonPageProps) => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={
                    <ContactListPage
                        contactsState={contactsState}
                        favoriteContactsState={favoriteContactsState}
                        groupContactsState={groupContactsState}
                    />
                }/>
                <Route path="contact">
                    <Route index element={
                        <ContactListPage
                            contactsState={contactsState}
                            favoriteContactsState={favoriteContactsState}
                            groupContactsState={groupContactsState}
                        />
                    }/>
                    <Route path=":contactId" element={<ContactPage/>}/>
                </Route>
                <Route path="groups">
                    <Route index element={
                        <GroupListPage
                            contactsState={contactsState}
                            favoriteContactsState={favoriteContactsState}
                            groupContactsState={groupContactsState}
                        />
                    }/>
                    <Route path=":groupId" element={
                        <GroupPage
                            contactsState={contactsState}
                            favoriteContactsState={favoriteContactsState}
                            groupContactsState={groupContactsState}
                        />
                    }/>
                </Route>
                <Route path="favorite" element={
                    <FavoriteListPage
                        contactsState={contactsState}
                        favoriteContactsState={favoriteContactsState}
                        groupContactsState={groupContactsState}
                    />
                }/>
            </Route>
        </Routes>
    );
};