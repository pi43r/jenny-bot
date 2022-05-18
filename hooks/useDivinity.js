import { useState } from 'react'

const useDivinity = () => {
  const [data, setData] = useState({ text: '' })
  const [question, setQuestion] = useState('')
  const [prompt, setPrompt] = useState(
    '[You talk to an alien oracle from another universe. Surprisingly it answers in chinese rhymes.]'
  )
  const [isLoading, setIsLoading] = useState(false)

  const askDivinity = async (prompt, search) => {
    setIsLoading(true)
    const res = await fetch('/api/openai', {
      body: JSON.stringify({
        prompt: prompt,
        search: search
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    const data = await res.json()
    setData(data)
    setIsLoading(false)
  }

  return {
    isLoading,
    data,
    question,
    setQuestion,
    prompt,
    setPrompt,
    askDivinity
  }
}

export default useDivinity
