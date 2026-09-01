import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {GroupDto} from 'src/types/dto/GroupDto';

interface GroupContactsCardProps {
    group: GroupDto,
    withLink?: boolean
}

export const GroupCard = ({group, withLink}: GroupContactsCardProps) =>
    <Card key={group.id}>
        <Card.Header>
            {withLink
                ? <Link to={`/groups/${group.id}`}>
                    {group.name}
                </Link>
                : group.name
            }
        </Card.Header>
        <Card.Body>
            {group.description}
        </Card.Body>
        <Card.Img variant="top" src={group.photo}/>
        <Card.Footer>Contacts: {group.contactIds.length}</Card.Footer>
    </Card>;
