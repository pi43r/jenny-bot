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

	const [type, setType] = useState('user')
	const onChangeType = useCallback((event) => {
		setType(event.target.value)
	}, [])

	const onSend = useCallback(
		(event) => {
			event.preventDefault()
			if(text === '') return
			sendMessage({
				text,
				type
			})

			askBot(prompt, text)

			setText('')
		},
		[sendMessage, text, type, prompt, askBot]
	)

	useEffect(() => {
		if(data && data.text){
			sendMessage({
				text: data.text,
				type: 'bot'
			})
		}
	}, [data])



	return (
		<form onSubmit={onSend}>
			<textarea
				className="resize-none p-2 border border-stone-300 accent-purple-500 rounded-md h-full w-full font-mono"
				rows={8}
				value={text}
				onChange={onChangeText}
				style={{ padding: 4, marginRight: 16 }}
			/>{' '}
			{/* <select onChange={onChangeType} style={{ padding: 4, marginRight: 16 }}>
				<option value="user">User</option>
				<option value="bot">Bot</option>
			</select> */}
			<button
				type="submit"
				className="border rounded-lg border-slate-600 hover:bg-slate-600 hover:text-slate-50"
				style={{
					padding: '8px 16px',
					fontWeight: 'bold',
					textTransform: 'uppercase'
				}}
			>
				Send
			</button>
		</form>
	)
})

SendForm.displayName = 'SendForm'

export default SendForm
