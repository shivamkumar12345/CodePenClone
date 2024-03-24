import React, {useState} from 'react'
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/xml/xml.js"
import "codemirror/mode/css/css.js"
import "codemirror/mode/javascript/javascript.js"
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import "../style.css"

const EditorPage = (props) => {
    const [open, setOpen] = useState(true);
    const {displayName, language,value,onChange}=props;
    const onChangeHandle = (editor,data,value)=>{
        onChange(value);
    }
   
    const openEditor = (e)=>{
        setOpen(!open);

    }
  return (
    <>
    <div className={`editor-container ${open? "": "collapsed"}`}>
        <div className='editor-title'>
            <span>{displayName}</span>
            <button onClick={openEditor} id='editorBtn'>
                <FontAwesomeIcon icon={open? faCompressAlt :faExpandAlt}/>
            </button>
        </div>
        <ControlledEditor
            onBeforeChange={onChangeHandle}
            value={value}
            className='code-mirror-wrapper'     
            options={
                {
                    lineWrapping:true,
                    lint:true,
                    mode:language,
                    lineNumbers:true,
                    theme:'material',
                    autocorrect:true,
                    
                }
            }
        />
    </div>
    </>
  )
}

export default EditorPage