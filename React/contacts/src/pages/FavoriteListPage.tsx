import React, {memo} from 'react';
import {CommonPageProps} from './types';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';

export const FavoriteListPage = memo(({favoriteContactsState, contactsState}: CommonPageProps) => {
    const contacts = contactsState[0].filter(({id}) => favoriteContactsState[0].includes(id));

    return (
        <Row xxl={4} className="g-4">
            {contacts.map((contact) => (
                <Col key={contact.id}>
                    <ContactCard contact={contact} withLink/>
                </Col>
            ))}
        </Row>
    );
});
