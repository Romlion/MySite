import PropTypes from "prop-types"
import styles from "./FurnitureCard.module.css"

const FurnitureCard = ({ furniture }) => {
     return (
        <figure className={styles.card}>
                <h2 className={styles.cardTitle}>{furniture.name}</h2>
                <img src={furniture.imgSrc} alt={furniture.name} className={styles.cardImg} />
            <figcaption>
                <p className={styles.cardDescription}>{furniture.description}</p>
                </figcaption>
        </figure>
    );
}

FurnitureCard.propTypes = {
    furniture: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
        description: PropTypes.string.isRequired,
    }).isRequired
};

export default FurnitureCard;