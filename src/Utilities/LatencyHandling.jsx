// Wrapper or Higher order function:
// The purpose of this anonymous function is to act as a wrapper around the HandleTone function. When you use measureLatency(HandleTone), it returns this anonymous function, which you can then call with the same arguments that HandleTone expects. This allows you to intercept the function call and perform additional actions, like measuring latency, before or after calling the original HandleTone function.
export function measureLatency(HandleTone) {
  // Anonymous function defined on the fly
  return function (source, command, note, velocity) {
    const startTime = performance.now()

    // Call the original HandleTone function
    HandleTone(source, command, note, velocity) // ! Called by HandleTone
    // console.log(`\n\t\tNOTE HERE: [${note}]`)

    const endTime = performance.now()
    const latency = endTime - startTime

    return latency // Return the latency value
  }
}
