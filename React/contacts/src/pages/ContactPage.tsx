import {ContactCard} from 'src/components/ContactCard';
import {ContactDto} from "src/types/dto/ContactDto";
import {Empty} from 'src/components/Empty';
import {useParams} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';
import {useContacts} from "src/hooks";

export const ContactPage = () => {
    const {contactId} = useParams<{ contactId: ContactDto['id'] }>();
    const {contacts} = useContacts();
    const contact = contacts.find(({id}) => id === contactId);

    return (
        <Row xxl={3}>
            <Col className="mx-auto">
                {contact ? <ContactCard contact={contact}/> : <Empty/>}
            </Col>
        </Row>
    );
};
