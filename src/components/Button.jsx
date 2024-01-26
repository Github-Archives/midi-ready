import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button
      className="rounded border-2 border-blue-800 bg-blue-500 px-4 py-2 font-bold text-white transition duration-150 active:bg-blue-700"
      onClick={props.onClick}
    >
      {props.propData}
    </button>
  )
}

Button.propTypes = {
  propData: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
