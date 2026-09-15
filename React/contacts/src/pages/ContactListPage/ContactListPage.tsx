import {FilterForm} from "src/pages/ContactListPage/components/FilterForm";
import {Loader, ContactCard} from 'src/components';
import {useContacts, useGroups} from "src/hooks";
import {Col, Row} from 'react-bootstrap';
import {useState} from "react";

const initialState = {
    name: "",
    groupId: "",
};

export const ContactListPage = () => {
    const {contacts: allContacts, isLoading} = useContacts();
    const {groups} = useGroups();
    const [formValues, setFormValues] = useState(initialState);

    const contacts = allContacts.filter(contact => {
        const nameMatch = contact.name.toLowerCase().includes(formValues.name.toLowerCase());
        const groupMatch = formValues.groupId ? groups
                .find(group => group.id === formValues.groupId)
                ?.contactIds.includes(contact.id)
            : true;
        return nameMatch && groupMatch;
    });

    if (isLoading)
        return <Loader/>;

    return (
        <Row xxl={1}>
            <Col className="mb-3">
                <FilterForm setFormValues={setFormValues} formValues={formValues}/>
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
