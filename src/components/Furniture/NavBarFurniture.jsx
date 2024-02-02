import PropTypes from "prop-types"

function NavBarFurniture({ setFurnitureIndex, furnitureList }) {
    return (
        <>
        {furnitureList.map((furniture, index) => (
            <button
            type="button" 
            onClick={() => setFurnitureIndex(index)} 
            key={furniture.name}>
                {furniture.name}
                </button>
        ))}
        </>
    )
}

NavBarFurniture.propTypes = {
    furnitureIndex: PropTypes.number.isRequired,
    setFurnitureIndex: PropTypes.func.isRequired,
    furnitureList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default NavBarFurniture