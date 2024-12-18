import style from './AppCard.module.css';
import AppButton from './AppButton'

function AppCard({ id, title, image, content, tags }) {
    return (
        <div className={style.card}>
            <div className={style.imgContainer}>
                <img src={image ? `/images/${image}` : `/images/600x400.png`} />
            </div>
            <div className={style.textContainer}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div className={style.cardInfo}>
                <AppButton />
                {tags.map((curTag, index) => (
                    <span key={index} className={style[curTag]}>{curTag}</span>
                ))}
            </div>
        </div>
    )
}

export default AppCard;