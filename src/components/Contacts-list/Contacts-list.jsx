import { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { selectContact } from 'redux/contacts/selectors';
import { selectAuth } from 'redux/auth/selectors';
import Button from '@mui/material/Button';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { login } from 'components/Confetti/utils';
import s from './Contacts-list.module.css';

export const ContactsList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const status = useSelector(selectAuth);

  const filteredContacts = useMemo(() => {
    return contacts.length ? contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase())
    }) : [];
  }, [contacts, filter]);

  useEffect(() => {
    if (status) {
      dispatch(fetchContacts());
    };
  }, [dispatch, status]);

  useEffect(() => {
    login.submit();
  }, [contacts]);

  const elements = filteredContacts.map(({ id, name, number }) => (
    <li className={s.item} key={id}>
      <p className={s.text}>
        <PhoneAndroidIcon sx={{ fontSize: 20, marginRight: 1 }} />
        {name}</p>
      <p className={s.tel}>Tel: {number}</p>
      <Button color='inherit'
        variant='contained'
        startIcon={<DeleteForeverOutlinedIcon />}
        type="button"
        onClick={() => window.confirm(`Delete contact ${name}?`) && dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </li>
  ));

  return <div className={s.wrapper}>
    <ul className={s.list}>{elements}</ul>
    </div>;
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
