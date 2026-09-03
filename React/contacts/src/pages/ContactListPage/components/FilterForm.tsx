import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import {useGroups} from "src/hooks";
import {ChangeEvent} from "react";

interface FormValues {
    name: string,
    groupId: string,
}

interface FilterFormProps {
    formValues: FormValues,
    setFormValues: (value: (((prevState: {
        name: string
        groupId: string
    }) => {
        name: string
        groupId: string
    }) | {
        name: string
        groupId: string
    })) => void
}

export const FilterForm = ({formValues, setFormValues}: FilterFormProps) => {
    const {groups} = useGroups();

    const handleChangeName = ({target}: ChangeEvent<HTMLInputElement>) => {
        setFormValues(prevState => ({...prevState, name: target.value}));
    };

    const handleSelectGroup = ({target}: ChangeEvent<HTMLSelectElement>) => {
        setFormValues(prevState => ({...prevState, groupId: target.value}));
    };
    return (
        <Form>
            <Row xxl={4} className="g-4">
                <Col>
                    <InputGroup className="mb-3">
                        <Form.Control
                            id="name"
                            name="name"
                            value={formValues.name}
                            placeholder="name"
                            aria-label="name"
                            onChange={handleChangeName}
                        />
                    </InputGroup>
                </Col>

                <Col>
                    <Form.Select
                        id="groupId"
                        name="groupId"
                        aria-label="Поиск по группе"
                        value={formValues.groupId}
                        onChange={handleSelectGroup}
                    >
                        <option value="">Open this select menu</option>
                        {groups.map((group) => (
                            <option value={group.id} key={group.id}>
                                {group.name}
                            </option>
                        ))}
                    </Form.Select>
                </Col>

                <Col>
                    <Button type="submit">
                        Поиск
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};