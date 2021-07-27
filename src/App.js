import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
const App=()=> {
  if (!localStorage.getItem('username')) return <LoginForm />;

	return (
		<ChatEngine
			height='100vh'
      projectID='5eb6c947-19c3-473b-8084-d994fe577fdd'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}

			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		/>
	);
  
};
export default App