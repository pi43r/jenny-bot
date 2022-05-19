import { memo } from 'react'
import { useBotState } from 'react-conversation'
import useStore from 'helpers/store'

const BotStateIndicator = memo(() => {
	const botState = useStore((s) => s.isLoading)

	if (!botState) {
		return null
	}

	return (
		<div
			style={{
				alignSelf: 'flex-start',
				padding: '0 16px',
				fontWeight: 'bold',
				letterSpacing: '0.05rem'
			}}
		>
			...
		</div>
	)
})

BotStateIndicator.displayName = 'BotStateIndicator'

export default BotStateIndicator
