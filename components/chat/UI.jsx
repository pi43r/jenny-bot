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
import Download from './Download'
import BotStateIndicator from './BotStateIndicator'
import { useEffect } from 'react'
import { useRef } from 'react'
import useStore from 'helpers/store'

const Example = memo(() => {
	const messages = useMessages()
	const sendMessage = useSendMessage()

	const chatbox = useRef()
	useEffect(() => {
		if (!messages) return
		useStore.setState({ chatLog: messages })
		if (chatbox && chatbox.current.lastChild) {
			chatbox.current.lastChild.scrollIntoView('smooth')
		}
	}, [messages])

	useEffect(() => {
		const intro = "Hallo, ich bin Jenny. Ich möchte mit dir ein kurzes Interview für unsere nächste Ausgabe führen. Wie heißt du und was machst du beruflich?"
		sendMessage({text: intro, type:'bot' })
	},[])

	return (
		<div className="bg-yellow-300 p-4 h-screen">
			<div
				ref={chatbox}
				className="h-4/6 overflow-y-scroll bg-white rounded-lg flex flex-col border-2 border-black shadow-inner"
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
				<Download />
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
