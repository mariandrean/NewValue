import React, { useState } from 'react';
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

const extensions=[
    StarterKit,
    Underline
]

const content =``

const TipTap = ({onEditorContentSave}) => {
    const editor = useEditor({
        extensions,
        content,
    })

    if (!editor) {
        return null
      }

    const handleEditorContent= () =>{
      const html = editor.getHTML()
      console.log('content',html)
      onEditorContentSave(html)
    }



  return (
    <div className='m-8'>
        <div className='w-full flex flex-wrap bg-gray-300 p-3 gap-2 text-white'>
        <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <strong>B</strong>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <em>I</em>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <s>U</s>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleUnderline()
            .run()
        }
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        <u>U</u>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBulletList()
            .run()
        }
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        BulletList
      </button>
        </div>
        <div className='border border-gray-500 border-t-0'>
        <EditorContent editor={editor} className='max-h-96 overflow-y-scroll'/>
        </div>
        <button type="button" onClick={handleEditorContent}>Guardar</button>
        
    </div>
  )
}

export default TipTap;
