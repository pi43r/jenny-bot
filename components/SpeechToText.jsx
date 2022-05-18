import useSpeechToText from 'react-hook-speech-to-text'
import { useEffect } from 'react'

const SpeechRecognition = ({ question, setQuestion, prompt, askDivinity }) => {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText
  } = useSpeechToText({
    continuous: false,
    useLegacyResults: false
  })

  useEffect(() => {
    if (interimResult) {
      setQuestion(interimResult)
    }
  }, [interimResult])

  useEffect(() => {
    if (!isRecording && question.slice(-1) != '?' && question) {
      setQuestion(question + '?')
      console.log(prompt)
      askDivinity(prompt, question)
    }
  }, [isRecording])

  return (
    <>
      {error ? (
        <p>Web Speech API is not available in this browser.</p>
      ) : (
        <div className="flex items-center">
          <button
            className={`btn ${
              isRecording
                ? 'bg-violet-700 text-stone-100'
                : 'border border-violet-400'
            }`}
            onClick={isRecording ? stopSpeechToText : startSpeechToText}
          >
            {isRecording ? 'Stop' : 'Talk'}
          </button>

          {/* <ul>
          {results.map((result) => (
            <li key={result.timestamp}>{result.transcript}</li>
            ))}
            {interimResult && <li>{interimResult}</li>}
          </ul> */}
        </div>
      )}
    </>
  )
}

export default SpeechRecognition
