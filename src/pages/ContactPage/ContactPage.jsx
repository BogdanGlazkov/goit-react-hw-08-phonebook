import { FilterList } from "components/Filter/Filter";
import { ContactsList } from "components/Contacts-list";
import {Form} from 'components/Form/Form';
import s from './ContactPage.module.css';

const ContactPage = () => {
    return (
        <>
            <div className={s.wrapper}>
                <Form />
                <FilterList />
                <ContactsList />
            </div>
        </>
    );
};

export default ContactPage;
