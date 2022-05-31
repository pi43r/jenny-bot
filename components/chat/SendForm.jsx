import { memo, useCallback, useState } from 'react'
import { MessageType, useSendMessage } from 'react-conversation'
import useBot from 'hooks/useBot'
import { useEffect } from 'react'

const SendForm = memo(() => {
	const sendMessage = useSendMessage()
	const { askBot, data, prompt } = useBot()
	// const prompt = useStore(s => s.prompt)
	// const data = useStore(s => s.data)

	const [text, setText] = useState('')
	const onChangeText = useCallback((event) => {
		setText(event.target.value)
	}, [])

	const onSend = useCallback(
		(event) => {
			event.preventDefault()
			if (text === '') return
			sendMessage({
				text,
				type: 'user'
			})

			askBot(prompt, text)

			setText('')
		},
		[sendMessage, text, prompt, askBot]
	)

	useEffect(() => {
		if (data && data.text) {
			sendMessage({
				text: data.text,
				type: 'bot'
			})
		}
	}, [data])

	return (
		<form onSubmit={onSend}>
			<textarea
				className="resize-none p-2 border-2 border-black accent-purple-600 rounded-md h-full w-full font-mono"
				rows={7}
				value={text}
				onChange={onChangeText}
				style={{ padding: 4, marginRight: 16 }}
				placeholder="Schreibe deine Antwort und drücke dann auf senden."
			/>{' '}
			{/* <select onChange={onChangeType} style={{ padding: 4, marginRight: 16 }}>
				<option value="user">User</option>
				<option value="bot">Bot</option>
			</select> */}
			<button type="submit" className="font-bold uppercase mt-1 px-4 btn">
				Send
			</button>
		</form>
	)
})

SendForm.displayName = 'SendForm'

export default SendForm
