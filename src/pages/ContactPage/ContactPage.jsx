import { FilterList } from "components/Filter/Filter";
import { ContactsList } from "components/Contacts-list";
import {Form} from 'components/Form/Form';
import { ConfettiContainer } from "components/Confetti";
import s from './ContactPage.module.css';

const ContactPage = () => {
    return (
            <main className={s.wrapper}>
                <Form />
                <FilterList />
                <ContactsList />
                <ConfettiContainer />
            </main>
    );
};

export default ContactPage;
