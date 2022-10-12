import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import s from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.text}>My Phone Book <ContactPhoneIcon sx={{ fontSize: 40, marginLeft: 4 }} /></h1>
            <div>
                <img className={s.img}
                    src="https://static8.depositphotos.com/1029554/813/i/450/depositphotos_8138619-stock-photo-old-style-phone-over-yellow.jpg"
                    alt='Phone and phonebook'
                />
            </div>
        </div>
    );
};

export default HomePage;