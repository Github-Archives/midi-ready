const noteLetter = ''
function ConvertMidiCommandsToNotes(note) {
  // Map
  // command 144 = note on, 128 = note off
  // note 0 - 127 (middle C = 60)
  // velocity 0 - 127 (0 = no sound, 127 = full volume)

  if (note == 60) {
    noteLetter == 'C3'
  } else if (note == 62) {
    noteLetter == 'D3'
  }

  return noteLetter
  //   return 'F4'
}

export default ConvertMidiCommandsToNotes
