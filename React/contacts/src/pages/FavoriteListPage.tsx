import {ContactCard} from 'src/components/ContactCard';
import {Col, Row} from 'react-bootstrap';
import {useContacts} from "src/hooks";

export const FavoriteListPage = () => {
    const {contacts} = useContacts();
    const favorites = contacts.filter(contact => contact.isFavorite);

    return (
        <Row xxl={4} className="g-4">
            {favorites.map((contact) => (
                <Col key={contact.id}>
                    <ContactCard contact={contact} withLink/>
                </Col>
            ))}
        </Row>
    );
};