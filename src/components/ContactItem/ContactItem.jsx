import PropTypes from 'prop-types';
import { ListItem, Item, ItemButton, ItemSpan } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';

export const ContactItem = ({ info: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <ListItem>
        <ItemSpan>{name} :</ItemSpan> {number}
      </ListItem>
      <ItemButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete contact
      </ItemButton>
    </Item>
  );
};

ContactItem.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
