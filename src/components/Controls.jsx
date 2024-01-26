import PropTypes from 'prop-types'
import Button from './Button'
import useStore from '../../store'

export function Controls({ onIncreasePopulation, onRemoveAllBears }) {
  const handleClickIncrease = () => {
    console.log('Increase button clicked')
    onIncreasePopulation()
  }

  const handleClickRemoveAll = () => {
    console.log('Remove All button clicked')
    onRemoveAllBears()
  }

  return (
    <div>
      <Button onClick={handleClickIncrease} propData={'Increase Population'} />
      <Button onClick={handleClickRemoveAll} propData={'Remove All Bears'} />
    </div>
  )
}

Controls.propTypes = {
  onIncreasePopulation: PropTypes.func.isRequired,
  onRemoveAllBears: PropTypes.func.isRequired,
}
