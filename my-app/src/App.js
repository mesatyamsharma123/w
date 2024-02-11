import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from 'react-use-clipboard';
import { useState } from "react";
import "./App.css"



const App=()=> {
  const [textTCopy,setTextToCopy] = useState();
  const [isCopied, setCopied] =useClipboard(textTCopy);
  const StartListening= ()=>SpeechRecognition.startListening({continuous:true});
  const StopListening =()=>SpeechRecognition.stopListening({continuous:true})
   const { transcript ,browserSupportsSpeechRecognition} = useSpeechRecognition();
 if(!browserSupportsSpeechRecognition){
   return null
 }
 

  return (
    <div className="container">
    <h2> Speech to text Converter enjoy</h2>
    <br></br>
    
     
    <div className="main-content" onClick={()=> setTextToCopy(transcript)}>
    {transcript}
     </div>

    <div className="btn-style">
    <button onClick={setCopied}>
      Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
    <button onClick={StartListening}>Start Listening</button>
    <button onClick={StopListening}>Stop Listening</button>
    </div>
    </div>
  )
}

export default App;
