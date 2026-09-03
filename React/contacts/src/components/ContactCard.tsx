import {ContactDto} from 'src/types/dto/ContactDto';
import {Card, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

interface ContactCardProps {
    contact: ContactDto,
    withLink?: boolean
}

export const ContactCard = ({contact, withLink}: ContactCardProps) =>
    <Card>
        <Card.Img variant="top" src={contact.photo}/>
        <Card.Body>
            <Card.Title>
                {withLink ? <Link to={`/contact/${contact.id}`}>{contact.name}</Link> : contact.name}
            </Card.Title>
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item>
                        <Link to={`tel:${contact.phone}`} target="_blank">
                            {contact.phone}
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>{contact.birthday}</ListGroup.Item>
                    <ListGroup.Item>{contact.address}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card.Body>
    </Card>;
