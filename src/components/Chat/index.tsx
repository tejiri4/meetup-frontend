import React from 'react'
import cn from 'classnames';

import './Chat.scss';

type ChatProps = {
  text: string;
  start?: boolean; 
  end?: boolean; 
  white?: boolean;
  grey?: boolean;
}

const Chat = ({ text, start, end, white, grey }: ChatProps) => (
  <div className={cn('chat', {
    start,
    end,
    white, 
    grey
  })}>
    {text}
  </div>
)

export default Chat
