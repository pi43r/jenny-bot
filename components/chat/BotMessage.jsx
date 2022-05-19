import { MessageBot } from 'react-conversation'
import { memo } from 'react'
import BotIcon from './bot.svg'

const BotMessage = memo(({ timestamp, message: { text } }) => (
	<div
		style={{
			alignSelf: 'flex-start',
			display: 'flex',
			alignItems: 'center',
			backgroundColor: 'rgba(255, 255, 255, 0.5)',
			margin: 16,
			padding: 8,
			borderRadius: 8,
			boxShadow:
				'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
		}}
	>
		<div className='p-2 max-w-md'>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start'
				}}
			>
				{/* <span>{new Date(timestamp).toLocaleTimeString('de-DE')}</span> */}
        <span className='text-sm font-light italic mb-2'>jenny</span>
			</div>
      {text}
		</div>
	</div>
))

BotMessage.displayName = 'BotMessage'

export default BotMessage
