import React, {memo, useEffect, useState} from 'react';
import {CommonPageProps} from './types';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {GroupDto} from 'src/types/dto/GroupDto';
import {GroupCard} from 'src/components/GroupCard';
import {Empty} from 'src/components/Empty';
import {ContactCard} from 'src/components/ContactCard';
import {useContacts} from "src/hooks";

export const GroupPage = (({contactsState, groupContactsState}: CommonPageProps) => {
    const {groupId} = useParams<GroupDto['id']>();
    const group: GroupDto | undefined = groupContactsState[0].find(({id}) => id === groupId);

    const {contacts} = useContacts();
    const groupContacts = group ? contacts.filter(({id}) => group.contactIds.includes(id)) : [];

    return (
        <Row className="g-4">
            {group ?
                (
                    <>
                        <Col xxl={12}>
                            <Row xxl={3}>
                                <Col className="mx-auto">
                                    <GroupCard groupContacts={group}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row xxl={4} className="g-4">
                                {groupContacts.map((contact) => (
                                    <Col key={contact.id}>
                                        <ContactCard contact={contact} withLink/>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </>
                )
                : <Empty/>
            }
        </Row>
    );
});
