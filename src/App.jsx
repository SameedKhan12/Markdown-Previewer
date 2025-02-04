import { useState } from "react"
import Markdown from "react-markdown"
import './App.css'
import remarkGfm from 'remark-gfm'
function App() {
  const [editor, setEditor] = useState("")
  
  const convertMarkdown = (e) => {
  setEditor(e.target.value)
}
  return (
   <>
   <h1>Markdown Previewer</h1>
   <div className="wrapper" >
    <textarea onChange={(e)=>convertMarkdown(e)}  name="" id="editor" cols="30" rows={"20"} value={editor}></textarea>
    <div id="preview">
    <Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
    {editor}
  </Markdown>
    </div>
   </div>
   </>
  )
}

export default App
