import logo from './logo.svg';
import styled from 'styled-components';
import qrc from './QR.png'
import mob1 from './mod1.jpeg';
import mobvid from './mobvid.mp4';
import expo from './Expo.png';
import {useState,useEffect,useRef} from 'react';

function App() {

  const [copied,setCopied] = useState(false);
  const [width,setWidth] = useState(window.innerWidth);
  
  const InputRef = useRef(null);
  const VideoRef = useRef(null);
  useEffect(() => {
     if(copied){
        
        const fun = ()=> setCopied(false);
        setTimeout(fun,2500);
     
      return () => clearTimeout(fun,2500);
     }
 },[copied])
 

  useEffect(() => {
     window.addEventListener('resize',() => setWidth(window.innerWidth));
     

     return () => window.removeEventListener('resize',() => setWidth(window.innerWidth));

  },[width]);

  const onCopy = () => {
  
       InputRef.current.select();
       document.execCommand('Copy');
       setCopied(true);
  }

const scrollTo = () => VideoRef.current.scrollIntoView({behavior: "smooth"});




  return (
    <Screen>
       <h1> A Full Stack Pdf to Audio Converter App, extract the text from the Pdf and convert it into speech   </h1>
     <h1> Download the Expo Go <Expo src = {expo} />  App In your IOS or Android Phone </h1>
        <h1> You can open my Application in 2 ways </h1>

        { 720 < parseInt(width) ? <>
          <h2> 1. Scan the QRCode with Expo Go App after installation </h2> 
            <Demo onClick = {scrollTo}> { "Demo" } </Demo>
            <QRCode src = {qrc} alt = 'qr code'/>
              <h2> 2. Open The Expo Go App copy and paste the Url then click connect </h2>
           <center>
              <Input ref = {InputRef} 
              value = 'exp://exp.host/@bidbanrg/pdf-to-audio?release-channel=default'/> 
                <CopyToClipboard Copied = {copied} onClick = {onCopy}> { !copied ? "Copy" : "Copied" } </CopyToClipboard>
         </center>   
                <MobileImage src = {mob1}/>
               </> : 
               <>
                  <h2> 1. Open The Expo Go App copy and paste the Url then click connect </h2>
           <center>
              <Input ref = {InputRef} value = 'exp://exp.host/@bidbanrg/pdf-to-audio?release-channel=default'/> 
              <CopyToClipboard Copied = {copied} onClick = {onCopy}> { !copied ? "Copy" : "Copied" } </CopyToClipboard>
         </center>   
            <MobileImage src = {mob1}/>
            <h2> 2. Scan the QRCode after installing the Expo Go App </h2> 
            <Demo onClick = {scrollTo}> { "Demo" } </Demo>
            <QRCode src = {qrc} alt = 'qr code'/>
   

               </>
           }    
            <h2 ref = {VideoRef} > A little Demonstration about scanning the QRCode  </h2>
            <h4> (ios users may not have the Scan QR code option, in that case just scan it with the camera it will open up with Expo Go)  </h4>
            <MobileVideo  onClick = {scrollTo}  src = {mobvid} autoPlay  muted loop = 'true'/>
    </Screen>
  );
}
const Center = styled.div`

  display:flex;
  align-items:center;
  justify-content:space-between;

`
const Expo = styled.img`
   height:30px;
   @media(max-width:720px){
    height:20px;
   }

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
    font-size:50%;
    @media(min-width:720px){
      font-size:100%;
      h2{
         font-size:1rem;
         
      }
    }h2{
         
         text-align:center;
      }h4{
         
         text-align:center;
      }
    h1{
      text-align:center;
    }

` 

const QRCode = styled.img`
  margin-top:30px;
  width:30%;
  min-width:300px;
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
