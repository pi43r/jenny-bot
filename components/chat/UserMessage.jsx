import { MessageUser } from 'react-conversation'
import { memo } from 'react'

const BotMessage = memo(({ timestamp, message: { text, meta } }) => (
  <div
  className='bg-slate-300'
    style={{
      alignSelf: 'flex-end',
      display: 'flex',
      alignItems: 'center',
      margin: 16,
      padding: 16,
      borderRadius: 8,
      boxShadow:
        '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
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
