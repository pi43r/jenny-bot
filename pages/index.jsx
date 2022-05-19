import {
	ConversationProvider,
	MessageReactionProvider,
	MessageReactionCollection
} from 'react-conversation'

import Chat from 'components/chat/UI'

export default function Page() {
	return (
		<ConversationProvider>
				<Chat />
		</ConversationProvider>
		
	)
}
