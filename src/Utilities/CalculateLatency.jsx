// Total Latency Average
const latencyMeasurements = useRef([])
const [averageLatency, setAverageLatency] = useState(0)

// Trying to speed things back up
const latencyBuffer = useRef([])
// Adjust the latencyBufferLength as needed to control the number of measurements included in the average
const latencyBufferLength = 22 // Change this one to smaller number to speed up the average latency

function CalculateLatency() {
  return (
    <div>
      <h1>Calculate Latency</h1>
    </div>
  )
}
