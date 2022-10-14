import image from '../../images/phonebook.jpg'
import s from './HomePage.module.css';

const HomePage = () => {
    return (
        <main className={s.wrapper}>
            <h1 className={s.text}>My Phone Book</h1>
            <div>
                <img className={s.img}
                    src={image}
                    alt='Phone and phonebook'
                />
            </div>
        </main>
    );
};

export default HomePage;
