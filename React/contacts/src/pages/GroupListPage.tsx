import {Loader, GroupCard} from "src/components";
import {Col, Row} from 'react-bootstrap';
import {useGroups} from "src/hooks";

export const GroupListPage = (() => {
    const {groups, isLoading} = useGroups();

    if (isLoading)
        return <Loader/>;

    return (
        <Row xxl={4}>
            {groups.map(group => (
                <Col key={group.id}>
                    <GroupCard group={group} withLink/>
                </Col>
            ))}
        </Row>
    );
});
