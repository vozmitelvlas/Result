import React, {memo} from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {GroupDto} from 'src/types/dto/GroupDto';

interface GroupContactsCardProps {
    groupContacts: GroupDto,
    withLink?: boolean
}

export const GroupCard = memo(({groupContacts, withLink}: GroupContactsCardProps) => {

        return (
            <Card key={groupContacts.id}>
                <Card.Header>
                    {withLink
                        ? <Link to={`/groups/${groupContacts.id}`}>
                            {groupContacts.name}
                        </Link>
                        : groupContacts.name
                    }
                </Card.Header>
                <Card.Body>
                    {groupContacts.description}
                </Card.Body>
                <Card.Img variant="top" src={groupContacts.photo}/>
                <Card.Footer>Contacts: {groupContacts.contactIds.length}</Card.Footer>
            </Card>
        );
    }
);
