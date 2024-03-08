import { create } from 'zustand'

// We want to store only the current note number
const useStore = create((set) => ({
  note: '',
  // updateNoteNumber: (noteNumber) => {
  //   console.log(`Updating Note to -> [${noteNumber}]`)
  //   set((state) => ({ note: state.note + 1 }))
  // },
  updateNoteNumber: (noteNumber) => {
    console.log(`Updating Note to -> [${noteNumber}]`)
    set({ note: noteNumber })
  },
}))

export default useStore

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => {
//     console.log('Increasing population')
//     set((state) => ({ bears: state.bears + 1 }))
//   },
//   removeAllBears: () => {
//     console.log('Removing all bears')
//     set({ bears: 0 })
//   },
// }))

// export default useStore
