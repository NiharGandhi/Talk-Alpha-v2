// import React, { useState } from 'react';
// import OpenAI, { ClientOptions } from 'openai';

// const VoiceAssistant: React.FC = () => {
//     const [assistantResponse, setAssistantResponse] = useState<string>('');
//     const [listening, setListening] = useState<boolean>(false);

//     const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
//     console.log(apiKey);

//     const openai = new OpenAI({
//         apiKey: "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",
//         dangerouslyAllowBrowser: true
//     });

//     const startListening = () => {
//         const recognition = new window.webkitSpeechRecognition();
//         recognition.lang = 'en-US';
//         recognition.onstart = () => setListening(true);
//         recognition.onresult = (event: { results: { transcript: any; }[][]; }) => {
//             const userInput = event.results[0][0].transcript;
//             setAssistantResponse(userInput);
//             fetchAssistantResponse(userInput);
//         };
//         recognition.start();
//     };

//     const fetchAssistantResponse = async (userInput: string) => {
//         try {
//             const response = await openai.chat.completions.create({
//                 model: 'gpt-3.5-turbo',
//                 messages: [{ role: 'user', content: userInput }],
//             });
//             console.log(response);

//             // Check if response.choices is defined before accessing response.data
//             if (response.choices && response.choices.length > 0) {
//                 const assistantReply = response.choices[0].message.content.trim();
//                 console.log(assistantReply);
//                 // setAssistantResponse(assistantReply);
//                 speakResponse(assistantReply);
//             } else {
//                 console.error('Invalid response:', response);
//             }

//         } catch (error: any) {
//             console.error('Error fetching response:', error.message);
//         }
//     };

//     const speakResponse = (text: string) => {
//         const synthesis = new window.SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(synthesis);
//     };

//     return (
//         <div>
//             <h1>Voice Assistant</h1>
//             <button onClick={startListening} disabled={listening}>
//                 {listening ? 'Listening...' : 'Start Listening'}
//             </button>
//             {assistantResponse && (
//                 <div>
//                     <strong>Assistant:</strong> {assistantResponse}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default VoiceAssistant;



// GUI
// import React, { useState } from 'react';
// import OpenAI from 'openai';

// const VoiceAssistant: React.FC = () => {
//     const [assistantResponse, setAssistantResponse] = useState<string>('');
//     const [listening, setListening] = useState<boolean>(false);

//     const openai = new OpenAI({
//         apiKey: "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",
//         dangerouslyAllowBrowser: true
//     });

//     const startListening = () => {
//         const recognition = new window.webkitSpeechRecognition();
//         recognition.lang = 'en-US';
//         recognition.onstart = () => setListening(true);
//         recognition.onresult = (event: { results: { transcript: any; }[][]; }) => {
//             const userInput = event.results[0][0].transcript;
//             setAssistantResponse(userInput);
//             fetchAssistantResponse(userInput);
//         };
//         recognition.start();
//     };

//     const fetchAssistantResponse = async (userInput: string) => {
//         try {
//             const response = await openai.chat.completions.create({
//                 model: 'gpt-3.5-turbo',
//                 messages: [{ role: 'user', content: userInput }],
//             });

//             if (response.choices && response.choices.length > 0) {
//                 const assistantReply = response.choices[0].message.content.trim();
//                 setAssistantResponse(assistantReply);
//                 speakResponse(assistantReply);
//             } else {
//                 console.error('Invalid response:', response);
//             }
//         } catch (error: any) {
//             console.error('Error fetching response:', error.message);
//         }
//     };

//     const speakResponse = (text: string) => {
//         const synthesis = new window.SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(synthesis);
//     };

//     return (
//         <div className="container">
//             <h1>Voice Assistant</h1>
//             <button onClick={startListening} disabled={listening} className="button">
//                 {listening ? 'Listening...' : 'Start Listening'}
//             </button>
//             {assistantResponse && (
//                 <div className="assistant-response">
//                     <strong>Assistant:</strong> {assistantResponse}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default VoiceAssistant;

// GUI-2
// import React, { useState, useEffect } from 'react';
// import OpenAI from 'openai';

// const VoiceAssistant: React.FC = () => {
//     const [assistantResponse, setAssistantResponse] = useState<string>('');
//     const [listening, setListening] = useState<boolean>(false);
//     const [recognition, setRecognition] = useState<any>(null); // Store recognition instance

//     const openai = new OpenAI({
//         apiKey: "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",
//         dangerouslyAllowBrowser: true
//     });

//     useEffect(() => {
//         if (listening) {
//             const recognition = new window.webkitSpeechRecognition();
//             recognition.lang = 'en-US';
//             recognition.onstart = () => console.log("Listening...");
//             recognition.onresult = (event: { results: { transcript: any; }[][]; }) => {
//                 const userInput = event.results[0][0].transcript;
//                 setAssistantResponse(userInput);
//                 fetchAssistantResponse(userInput);
//             };
//             recognition.start();
//             setRecognition(recognition);
//         } else {
//             if (recognition) {
//                 recognition.stop();
//             }
//         }

//         return () => {
//             if (recognition) {
//                 recognition.stop();
//             }
//         };
//     }, [listening]); // Listen to changes in 'listening'

//     const fetchAssistantResponse = async (userInput: string) => {
//         try {
//             const response = await openai.chat.completions.create({
//                 model: 'gpt-3.5-turbo',
//                 messages: [{ role: 'system', content: "I want you to act as a client who got a call from a real-estate agent." },
//                             { role: 'user', content: userInput }],
//             });

//             if (response.choices && response.choices.length > 0) {
//                 const assistantReply = response.choices[0].message.content.trim();
//                 setAssistantResponse(assistantReply);
//                 speakResponse(assistantReply);
//             } else {
//                 console.error('Invalid response:', response);
//             }
//         } catch (error: any) {
//             console.error('Error fetching response:', error.message);
//         }
//     };

//     const speakResponse = (text: string) => {
//         const synthesis = new window.SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(synthesis);
//         setListening(true); // Start listening again after speaking
//     };

//     const toggleListening = () => {
//         setListening(prevListening => !prevListening);
//     };

//     return (
//         <div className="container">
//             <h1>Voice Assistant</h1>
//             <button onClick={toggleListening} className="button">
//                 {listening ? 'Stop Listening' : 'Start Listening'}
//             </button>
//             {assistantResponse && (
//                 <div className="assistant-response">
//                     <strong>Assistant:</strong> {assistantResponse}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default VoiceAssistant;


// // GUI-3
// import React, { useState, useEffect } from 'react';
// import OpenAI from 'openai';
// import './VoiceAssistant.css'; // Import CSS for styling

// const VoiceAssistant: React.FC = () => {
//     const [conversation, setConversation] = useState<{ role: string, text: string }[]>([]);
//     const [listening, setListening] = useState<boolean>(false);
//     const [recognition, setRecognition] = useState<any>(null); // Store recognition instance

//     const openai = new OpenAI({
//         apiKey: "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",
//         dangerouslyAllowBrowser: true
//     });

//     useEffect(() => {
//         if (listening) {
//             const recognition = new window.webkitSpeechRecognition();
//             recognition.lang = 'en-US';
//             recognition.onstart = () => console.log("Listening...");
//             recognition.onresult = (event: { results: { transcript: any; }[][]; }) => {
//                 const userInput = event.results[0][0].transcript;
//                 addConversationItem('user', userInput);
//                 fetchAssistantResponse(userInput);
//             };
//             recognition.start();
//             setRecognition(recognition);
//         } else {
//             if (recognition) {
//                 recognition.stop();
//             }
//         }

//         return () => {
//             if (recognition) {
//                 recognition.stop();
//             }
//         };
//     }, [listening]); // Listen to changes in 'listening'

//     const fetchAssistantResponse = async (userInput: string) => {
//         try {
//             const response = await openai.chat.completions.create({
//                 model: 'gpt-3.5-turbo',
//                 messages: [{ role: 'assistant', content: "You are a client who has received a call from a real-estate agent. Give appropriate responses acting as a customer." },
//                              { role: 'user', content: userInput }],
//             });

//             if (response.choices && response.choices.length > 0) {
//                 const assistantReply = response.choices[0].message.content.trim();
//                 addConversationItem('assistant', assistantReply);
//                 speakResponse(assistantReply);
//             } else {
//                 console.error('Invalid response:', response);
//             }
//         } catch (error: any) {
//             console.error('Error fetching response:', error.message);
//         }
//     };

//     const speakResponse = (text: string) => {
//         const synthesis = new window.SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(synthesis);
//         setListening(true); // Start listening again after speaking
//     };

//     const toggleListening = () => {
//         setListening(prevListening => !prevListening);
//     };

//     const addConversationItem = (role: string, text: string) => {
//         setConversation(prevConversation => [...prevConversation, { role, text }]);
//     };

//     return (
//         <div className="container">
//             <h1>Voice Assistant</h1>
//             <button onClick={toggleListening} className={`button ${listening ? 'listening' : ''}`}>
//                 {listening ? 'Stop Listening' : 'Start Listening'}
//             </button>
//             <div className="conversation-container">
//                 {conversation.map((item, index) => (
//                     <div key={index} className={`conversation-item ${item.role}`}>
//                         {item.text}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default VoiceAssistant;

// GUI - 4
// import React, { useState, useEffect } from 'react';
// import OpenAI from 'openai';
// import './VoiceAssistant.css'; // Import CSS for styling

// const VoiceAssistant: React.FC = () => {
//     const [conversation, setConversation] = useState<{ role: string, text: string }[]>([]);
//     const [listening, setListening] = useState<boolean>(false);
//     const [recognition, setRecognition] = useState<any>(null); // Store recognition instance

//     const openai = new OpenAI({
//         apiKey: "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",
//         dangerouslyAllowBrowser: true
//     });

//     useEffect(() => {
//         if (listening) {
//             const recognition = new window.webkitSpeechRecognition();
//             recognition.lang = 'en-US';
//             recognition.onstart = () => console.log("Listening...");
//             recognition.onresult = (event: { results: { transcript: any; }[][]; }) => {
//                 const userInput = event.results[0][0].transcript;
//                 addConversationItem('user', userInput);
//                 fetchAssistantResponse(userInput);
//             };
//             recognition.start();
//             setRecognition(recognition);
//         } else {
//             if (recognition) {
//                 recognition.stop();
//             }
//         }

//         return () => {
//             if (recognition) {
//                 recognition.stop();
//             }
//         };
//     }, [listening]); // Listen to changes in 'listening'

//     const fetchAssistantResponse = async (userInput: string) => {
//         try {
//             const response = await openai.chat.completions.create({
//                 model: 'gpt-3.5-turbo',
//                 messages: [
//                     { role: 'assistant', content: "You are a client who has received a call from a real-estate agent. Give appropriate responses acting as a customer." },
//                     { role: 'user', content: userInput }
//                 ],
//             });

//             if (response.choices && response.choices.length > 0) {
//                 const assistantReply = response.choices[0].message.content.trim();
//                 addConversationItem('assistant', assistantReply);
//                 speakOpenAITextToSpeech(assistantReply); // Call OpenAI text-to-speech instead
//             } else {
//                 console.error('Invalid response:', response);
//             }
//         } catch (error: any) {
//             console.error('Error fetching response:', error.message);
//         }
//     };

//     const speakOpenAITextToSpeech = async (text: string) => {
//         try {
//             const response = await openai.audio.speech.create({
//                 model: "tts-1",
//                 voice: "alloy",
//                 input: text,
//             });

//             const responseData = await response.blob();

//             console.log("Response:", response); // Log the response object

//             // const audioUrl = responseData.url;
//             const audioUrl = URL.createObjectURL(responseData);
//             console.log("Audio URL:", audioUrl); // Log the audio URL

//             const audio = new Audio(audioUrl);
//             audio.play();
//         } catch (error) {
//             console.error('Error playing OpenAI TTS:', error);
//         }
//     };



//     const toggleListening = () => {
//         setListening(prevListening => !prevListening);
//     };

//     const addConversationItem = (role: string, text: string) => {
//         setConversation(prevConversation => [...prevConversation, { role, text }]);
//     };

//     return (
//         <div className="container">
//             <h1>Voice Assistant</h1>
//             <button onClick={toggleListening} className={`button ${listening ? 'listening' : ''}`}>
//                 {listening ? 'Stop Listening' : 'Start Listening'}
//             </button>
//             <div className="conversation-container">
//                 {conversation.map((item, index) => (
//                     <div key={index} className={`conversation-item ${item.role}`}>
//                         {item.text}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default VoiceAssistant;

// GUI-5
import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';
import './VoiceAssistant.css'; // Import CSS for styling

const VoiceAssistant: React.FC = () => {
    require('dotenv').config();

    const [conversation, setConversation] = useState<{ role: string, text: string }[]>([]);
    const [listening, setListening] = useState<boolean>(false);
    const [recognition, setRecognition] = useState<any>(null); // Store recognition instance

    const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
});

    useEffect(() => {
        if (listening) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.lang = 'en-US';
            recognition.onstart = () => console.log("Listening...");
            recognition.onresult = (event: { results: { transcript: any; }[][]; }) => {
                const userInput = event.results[0][0].transcript;
                addConversationItem('user', userInput);
                fetchAssistantResponse(userInput);
            };
            recognition.start();
            setRecognition(recognition);
        } else {
            if (recognition) {
                recognition.stop();
            }
        }

        return () => {
            if (recognition) {
                recognition.stop();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listening]); // Listen to changes in 'listening'

    const fetchAssistantResponse = async (userInput: string) => {
        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'assistant', content: "You are a client who has received a call from a real-estate agent. Give appropriate responses acting as a customer." },
                    { role: 'user', content: userInput }
                ],
            });

            const responseChoice = response.choices[0]?.message?.content?.trim();

            if(responseChoice) {
                addConversationItem('assitant', responseChoice);
                speakOpenAITextToSpeech(responseChoice);
            } else {
                console.error('Invalid response', response);
            }
        } catch (error: any) {
            console.error('Error fetching response:', error.message);
        }
    };

    const speakOpenAITextToSpeech = async (text: string) => {
        try {
            const response = await openai.audio.speech.create({
                model: "tts-1",
                voice: "alloy",
                input: text,
            });

            const responseData = await response.blob();

            console.log("Response:", response); // Log the response object

            // const audioUrl = responseData.url;
            const audioUrl = URL.createObjectURL(responseData);
            console.log("Audio URL:", audioUrl); // Log the audio URL

            const audio = new Audio(audioUrl);
            audio.play();
        } catch (error) {
            console.error('Error playing OpenAI TTS:', error);
        }
    };



    const toggleListening = () => {
        setListening(prevListening => !prevListening);
    };

    const addConversationItem = (role: string, text: string) => {
        setConversation(prevConversation => [...prevConversation, { role, text }]);
    };

    return (
        <div className="container">
            <div className="content">
                <div className="conversation-container">
                    {conversation.map((item, index) => (
                        <div key={index} className={`conversation-item ${item.role}`}>
                            {item.text}
                        </div>
                    ))}
                </div>
                <button onClick={toggleListening} className={`button ${listening ? 'listening' : ''}`}>
                    {listening ? 'Stop Listening' : 'Start Listening'}
                </button>
            </div>
        </div>
    );
};

export default VoiceAssistant;