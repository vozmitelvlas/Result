import {FilterForm, FilterFormValues} from './components/FilterForm';
import {Loader, ContactCard} from 'src/components';
import {useContacts, useGroups} from "src/hooks";
import {Col, Row} from 'react-bootstrap';

export const ContactListPage = () => {
    const {contacts, isLoading} = useContacts();
    const {groups} = useGroups();

    const onSubmit = (fv: Partial<FilterFormValues>) => {
        // let findContacts: ContactDto[] = contactsState[0];
        //
        // if (fv.name) {
        //     const fvName = fv.name.toLowerCase();
        //     findContacts = findContacts.filter(({name}) => (
        //         name.toLowerCase().indexOf(fvName) > -1
        //     ));
        // }
        //
        // if (fv.groupId) {
        //     const groupContacts = groupContactsState[0].find(({id}) => id === fv.groupId);
        //
        //     if (groupContacts) {
        //         findContacts = findContacts.filter(({id}) => (
        //             groupContacts.contactIds.includes(id)
        //         ));
        //     }
        // }

        // setContacts(findContacts);
    };

    if (isLoading)
        return <Loader/>;

    return (
        <Row xxl={1}>
            <Col className="mb-3">
                <FilterForm groups={groups} initialValues={{}} onSubmit={onSubmit}/>
            </Col>
            <Col>
                <Row xxl={4} className="g-4">
                    {contacts.map((contact) => (
                        <Col key={contact.id}>
                            <ContactCard contact={contact} withLink/>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
};
