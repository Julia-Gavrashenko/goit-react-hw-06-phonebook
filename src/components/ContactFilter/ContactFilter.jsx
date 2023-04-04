import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/filterSlice/filterSlice';

import {
  FilterLabel,
  FilterContainer,
  FilterField,
} from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  const changeFilter = event => {
    dispatch(getFilteredContacts(event.currentTarget.value));
  };

  return (
    <FilterContainer>
      <FilterLabel>
        Find Contacts by name
        <FilterField type="text" value={filter} onChange={changeFilter} />
      </FilterLabel>
    </FilterContainer>
  );
};
