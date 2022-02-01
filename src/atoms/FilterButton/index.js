import PropTypes from 'prop-types'
import './style.scss'
function FilterButton({ text }) {
    return <button className="button">{text}</button>
}
FilterButton.prooTypes = {
    text: PropTypes.string.isRequired,
}
export default FilterButton
