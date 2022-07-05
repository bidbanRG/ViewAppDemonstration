import logo from './logo.svg';
import styled from 'styled-components';
import qrc from './QR.png'
import mob1 from './mod1.jpeg';
import mobvid from './mobvid.mp4';
import {useState,useEffect,useRef} from 'react';

function App() {

  const [copied,setCopied] = useState(false);
  const InputRef = useRef(null);
  const VideoRef = useRef(null);
  useEffect(() => {
     if(copied){
        
        const fun = ()=> setCopied(false);
        setTimeout(fun,2500);
     
      return () => clearTimeout(fun,2500);
     }
 },[copied])

  const onCopy = () => {
  
       InputRef.current.select();
       document.execCommand('Copy');
       setCopied(true);
  }

const scrollTo = () => VideoRef.current.scrollIntoView({behavior: "smooth"});




  return (
    <Screen>
        <h1> You can open the Application in 2 ways </h1>
        <h2> 1. Scan the QRCode after installing the Expo Go App </h2> 
          <Demo onClick = {scrollTo}> { "Demo" } </Demo>
            <QRCode src = {qrc} alt = 'qr code'/>
              <h2> 2. Open The Expo Go App copy and paste the Url then click connect </h2>
           <center>
              <Input ref = {InputRef} value = 'exp://exp.host/@bidbanrg/Bidisha_Audio?release-channel=default'/> 
                <CopyToClipboard Copied = {copied} onClick = {onCopy}> { !copied ? "Copy" : "Copied" } </CopyToClipboard>
         </center>   
             <MobileImage src = {mob1}/>
            <h2> A little Demonstration about scanning the QRCode   </h2>
            <MobileVideo ref = {VideoRef} onClick = {scrollTo}  src = {mobvid} autoPlay  muted loop = 'true'/>
    </Screen>
  );
}
const Center = styled.div`

  display:flex;
  align-items:center;
  justify-content:space-between;

`
const Demo = styled.button`
    width:80px;
  height:30px;
  font-weight:bold;
   margin-top:5px;
   margin-left:10px;
   color:#4666FF;
    border:1px solid  #4666FF;
  background-color:#171717;
   border-radius:8px;
   cursor:pointer;
   &:hover{
     background-color:#4666FF;
     color:#171717;
   }

`
const MobileImage = styled.img`
   @media(max-width:720px){
      height:500px;
   }

   height:700px;
   margin-bottom:40px;
   margin-top:20px;
`
const MobileVideo = styled.video`
   
    @media(max-width:720px){
      height:500px;
   }

   height:700px;
   margin-bottom:30px;
   margin-top:5px;

`

const Screen = styled.div`

    width:100%;
    height:100%;
    background-color:#171717;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:white;
    font-size:1.5vw;
` 

const QRCode = styled.img`
  margin-top:30px;
  width:30%;
  margin-bottom:20px;
`
const Input = styled.input`
  max-width:400px;
 min-width:320px;
  outline:none;
  font-size:1rem;
  padding-left:4px;
  padding-right:4px;
 
  border-radius:10px;
  border:2px solid white;
  p{
     color:skyblue;
  }

`
const CopyToClipboard = styled.button`
  width:80px;
  height:30px;
  font-weight:bold;
   margin-top:20px;
   margin-left:10px;
   color: ${props => props.Copied ? '#32CD32' : '#4666FF'};
   border:1px solid ${props => props.Copied ? '#32CD32' : '#4666FF'};
  
   background-color:#171717;
   border-radius:8px;
   cursor:pointer;
`
export default App;
