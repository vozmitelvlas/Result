import {Loader, Empty, ContactCard} from 'src/components';
import {ContactDto} from "src/types/dto/ContactDto";
import {useParams} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';
import {useContacts} from "src/hooks";

export const ContactPage = () => {
    const {contacts, isLoading} = useContacts();
    const {contactId} = useParams<{ contactId: ContactDto['id'] }>();

    if (isLoading)
        return <Loader/>;

    const contact = contacts.find(({id}) => id === contactId);

    return (
        <Row xxl={3}>
            <Col className="mx-auto">
                {contact ? <ContactCard contact={contact}/> : <Empty/>}
            </Col>
        </Row>
    );
};
