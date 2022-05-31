import { MessageUser } from 'react-conversation'
import { memo } from 'react'

const BotMessage = memo(({ timestamp, message: { text, meta } }) => (
  <div
  className='bg-yellow-300 shadow-hard'
    style={{
      alignSelf: 'flex-end',
      display: 'flex',
      alignItems: 'center',
      margin: 16,
      padding: 16,
      borderRadius: 8,
    }}
  >
    <div style={{ padding: 8 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        {/* <span
          className='border-b text-xs'
        >
          {new Date(timestamp).toLocaleTimeString('de-DE')}
        </span>{' '} */}
        {text}
      </div>
    </div>
  </div>
))

BotMessage.displayName = 'BotMessage'

export default BotMessage
