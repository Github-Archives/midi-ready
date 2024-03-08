// customHook.js
import create from 'zustand'

const useCustomStore = create((set) => ({
  updateNoteNumber: (noteNumber) => {
    console.log(`Updating Note to -> [${noteNumber}]`)
    set({ note: noteNumber })
  },
}))

export default useCustomStore
