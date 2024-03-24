import EditorPage from "./EditorPage";
import "../style.css"
import { useContext, useState,useEffect } from "react";
import useLocalStorage from "../stores/useLocalStorage";
function App() {
  const [html, setHtml] = useLocalStorage("html",'');
  const [css, setCSS] = useLocalStorage("css",'');
  const [javaScript, setJavaScript] = useLocalStorage("js",'');
  const [template, setTemplate] = useState('')
 

  useEffect(() => {
    const timeout =setTimeout(()=>
        setTemplate(`<html>
            ${html}
            ${css}
            ${javaScript}
        </html>`),300);
    return () => {
      clearTimeout(timeout);
    }
  }, [html,css,javaScript])
  
  return (
   <>
   <div className="pane top-pane">
      <EditorPage 
        language={"xml"} 
        displayName="HTML" 
        value={html} 
        onChange={setHtml} />

      <EditorPage
       language={"xml"} 
       displayName="CSS" 
       value={css} 
       onChange={setCSS}/>

      <EditorPage
       language={"xml"} 
       displayName="Js" 
       value={javaScript} 
       onChange={setJavaScript}/>
   </div>
   <div className="pane bottom-pane">
      <iframe
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        frameBorder="0"
        srcDoc={template}
      />
   </div>
   </>
  );
}

export default App;
