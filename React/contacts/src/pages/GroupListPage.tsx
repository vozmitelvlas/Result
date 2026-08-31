import React, {memo} from 'react';
import {CommonPageProps} from './types';
import {Col, Row} from 'react-bootstrap';
import {GroupCard} from 'src/components/GroupCard';

export const GroupListPage = memo(({groupContactsState}: CommonPageProps) => {

    return (
        <Row xxl={4}>
            {groupContactsState[0].map((groupContacts) => (
                <Col key={groupContacts.id}>
                    <GroupCard groupContacts={groupContacts} withLink/>
                </Col>
            ))}
        </Row>
    );
});
