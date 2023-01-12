import {useState,useRef,useEffect} from "react";
import Darkmode from 'darkmode-js';

// new Darkmode().showWidget();
function Cwcounter()
{
    const[text,setText]=useState("");
    const[ans,setAns]=useState("");
    const rText = useRef();
    const hText=(event)=>{setText(event.target.value);
      
    }
    
    const count=()=>{
        let cc = text.length;
        let wc;
        if (cc == 0) {
            wc = 0;
        }
        else {
            wc = text.split(" ").length;
        }
        let res="Character Count: "+cc+"   Word Count: "+wc;
       
        setAns(res);}

    useEffect(() => { count() }, [text])
    const clear = () => {

        setText(" ");
        // rText.current.focus();
   
	}
    useEffect(() => { rText.current.focus(); }, [text])
    const options = {
        bottom: '64px', // default: '32px'
        right: 'unset', // default: '32px'
        left: '32px', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#fff',  // default: '#fff'
        buttonColorDark: '#100f2c',  // default: '#100f2c'
        buttonColorLight: '#fff', // default: '#fff'
        saveInCookies: false, // default: true,
        label: '🌓', // default: ''
        autoMatchOsTheme: true // default: true
      }
      
      const darkmode = new Darkmode(options);
      darkmode.showWidget();
    return(
        <>
            <center>
                <div className=" bg-cyan-100 font-serif   min-h-[87.5vh]  flex flex-col items-center ">
            <h1 className="text-3xl text-black font-extrabold my-5  py-20 p-1 tracking-wider  ">
                CHARACTER WORD COUNTER APP
            </h1>
            <form  flex flex-col items-center onSubmit={clear} >
                        <textarea className=" resize-none p-4 my-4 rounded-lg sm:block  bg-gray-400 text-center text-gray-900 text-2xl  focus:outline-none focus:ring focus:ring-black"
                            placeholder="TEXT" rows={10} cols={70} onChange={hText} ref={rText} ></textarea>
                        
                        
                      
                        {/* <input type="submit"/> */}
                        <div className="my-2">   <input type="submit" value="Clear"/></div>
                      
            </form>
                    <h1 className="font-bold tracking-widest mt-3 text-2xl">{ans}</h1>

                    <div className="flex justify-center px-9" >
				<h1 className="text-gray-900 font-thin text-xl flex justify-center px-9">© 2023 | Ritika Hotwani</h1>
			</div>
                </div>
                
        </center>
        </>
    )
}
export default Cwcounter;