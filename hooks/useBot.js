import { useState, useEffect } from 'react'
import useStore from 'helpers/store'

const useBot = () => {
	const data = useStore((s) => s.data)
	const [question, setQuestion] = useState('')
	const prompt = useStore((s) => s.prompt)
	const isLoading = useStore((s) => s.isLoading)

	const askBot = async ({ prompt, question, memory }) => {
		if (!memory) memory = ''
		useStore.setState({ isLoading: true })
		const res = await fetch('/api/openai', {
			body: JSON.stringify({
				prompt: prompt,
				search: question,
				memory: memory,
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		})
		const data = await res.json()
		useStore.setState({ data: data })
		useStore.setState({ isLoading: false })
	}

	useEffect(() => {
		if (isLoading) {
			console.log('loading')
		}
	}, [isLoading])

	return {
		isLoading,
		data,
		prompt,
		askBot
	}
}

export default useBot
