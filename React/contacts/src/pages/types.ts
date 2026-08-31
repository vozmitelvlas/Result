import {State} from 'src/types/common';
import {ContactDto} from 'src/types/dto/ContactDto';
import {FavoriteContactDto} from 'src/types/dto/FavoriteContactDto';
import {GroupDto} from 'src/types/dto/GroupDto';

export interface CommonPageProps {
    contactsState: State<ContactDto[]>,
    favoriteContactsState: State<FavoriteContactDto>
    groupContactsState: State<GroupDto[]>
}
