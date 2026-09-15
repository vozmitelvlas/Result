import {ContactListPage, ContactPage, FavoriteListPage, GroupListPage, GroupPage} from "src/pages";
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "src/layouts";

export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<ContactListPage/>}/>
                <Route path="contact">
                    <Route index element={<ContactListPage/>}/>
                    <Route path=":contactId" element={<ContactPage/>}/>
                </Route>
                <Route path="groups">
                    <Route index element={<GroupListPage/>}/>
                    <Route path=":groupId" element={<GroupPage/>}/>
                </Route>
                <Route path="favorite" element={<FavoriteListPage/>}/>
            </Route>
        </Routes>
    );
};