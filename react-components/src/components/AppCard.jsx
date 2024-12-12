import style from './AppCard.module.css';
import AppButton from './AppButton'

function AppCard() {
    return (
        <div className={style.card}>
            <div className={style.imgContainer}>
                <img src={'/images/600x400.png'} />
            </div>
            <div className={style.textContainer}>
                <h3>Titolo del Post</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing assumenda, quisquam temporibus! elit. Molestias ipsa, sunt quae atque doloribus optio. Aperiam nemo assumenda, quisquam temporibus! tempore, saepe consequatur assumenda velit quibusdam consectetur atque inventore esse? Assumenda, quisquam temporibus! </p>
            </div>
             <AppButton /> 
        </div>
    )
}

export default AppCard;