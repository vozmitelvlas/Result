import {GroupCard, ContactCard, Empty, Loader} from 'src/components';
import {GroupDto} from 'src/types/dto/GroupDto';
import {useContacts, useGroups} from "src/hooks";
import {useParams} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';

export const GroupPage = () => {
    const {groups, isLoading: isGroupsLoading} = useGroups();
    const {contacts, isLoading: isContactsLoading} = useContacts();
    const {groupId} = useParams<{ groupId: GroupDto['id'] }>();

    if (isGroupsLoading || isContactsLoading)
        return <Loader/>;

    const group = groups.find(({id}) => id === groupId);
    const groupContacts = group ? contacts.filter(({id}) => group.contactIds.includes(id)) : [];

    return (
        <Row className="g-4">
            {group ?
                (
                    <>
                        <Col xxl={12}>
                            <Row xxl={3}>
                                <Col className="mx-auto">
                                    <GroupCard group={group}/>
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
};

