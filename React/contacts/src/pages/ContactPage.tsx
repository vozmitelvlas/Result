import {ContactCard} from 'src/components/ContactCard';
import {Empty} from 'src/components/Empty';
import {useParams} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';
import {CommonPageProps} from './types';

export const ContactPage = ({contactsState}: CommonPageProps) => {
    const {contactId} = useParams<{ contactId: string }>();
    const contact = contactsState[0].find(({id}) => id === contactId);

    return (
        <Row xxl={3}>
            <Col className="mx-auto">
                {contact ? <ContactCard contact={contact}/> : <Empty/>}
            </Col>
        </Row>
    );
};
