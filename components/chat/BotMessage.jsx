import { MessageBot } from 'react-conversation'
import { memo } from 'react'
import BotIcon from './bot.svg'

const BotMessage = memo(({ timestamp, message: { text } }) => (
	<div
		className="bg-violet-400 shadow-hard"
		style={{
			alignSelf: 'flex-start',
			display: 'flex',
			alignItems: 'center',
			margin: 16,
			padding: 8,
			borderRadius: 8
		}}
	>
		<div className="p-2 max-w-md">
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start'
				}}
			>
				{/* <span>{new Date(timestamp).toLocaleTimeString('de-DE')}</span> */}
				<span className="text-sm font-light italic mb-2">jenny</span>
			</div>
			{text}
		</div>
	</div>
))

BotMessage.displayName = 'BotMessage'

export default BotMessage
