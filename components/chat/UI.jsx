import {
	useMessages,
	MessageBot,
	useOnBotMessage,
	useOnUserMessage,
	MessageUser,
	useSendMessage
} from 'react-conversation'
import { memo, useState } from 'react'
import UserMessage from './UserMessage'
import BotMessage from './BotMessage'
import SendForm from './SendForm'
import Settings from './Settings'
import BotStateIndicator from './BotStateIndicator'
import { useEffect } from 'react'
import { useRef } from 'react'
import useStore from 'helpers/store'

const Example = memo(() => {
	const messages = useMessages()

	const [lastBotMessage, setLastBotMessage] = useState(null)

	const [lastUserMessage, setLastUserMessage] = useState(null)

	useOnBotMessage(setLastBotMessage)
	useOnUserMessage(setLastUserMessage)

	const chatbox = useRef()
	useEffect(() => {
		if (!messages) return

		useStore.setState({ chatLog: messages })
		console.log(useStore.getState().chatLog)
		if (chatbox && chatbox.current.lastChild) {
			chatbox.current.lastChild.scrollIntoView('smooth')
		}
	}, [messages])

	return (
		<div className="bg-slate-100 p-4 h-screen">
			<div
				ref={chatbox}
				className="h-4/6 overflow-y-scroll bg-white rounded-lg flex flex-col"
			>
				{Object.entries(messages).map(([time, message]) => {
					if (message.type === 'user') {
						return (
							<UserMessage
								key={`user-message-${time}`}
								message={message}
								timestamp={+time}
							/>
						)
					}

					return (
						<BotMessage
							key={`bot-message-${time}`}
							message={message}
							timestamp={+time}
						/>
					)
				})}
				<BotStateIndicator />
			</div>
			<div style={{ padding: '16px 0' }}>
				<SendForm />
			</div>
			<div>
				<Settings />
			</div>
			{/* <div
				style={{
					backgroundColor: '#282828',
					color: '#85e085',
					marginBottom: 16,
					fontWeight: 'bold',
					padding: 16
				}}
			>
				<div>Last Bot Message: "{lastBotMessage?.text || 'N/A'}"</div>
				<div style={{ paddingBottom: 8 }}>
					Last User Message: "{lastUserMessage?.text || 'N/A'}"
				</div>
			</div> */}
		</div>
	)
})

Example.displayName = 'Example'

export default Example
