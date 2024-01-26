import useStore from '../../store'

export function BearCounter() {
  const bears = useStore((state) => state.bears)

  return <h1>{bears} bears around here...</h1>
}
