import React, { useCallback } from 'react';
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import BrokenLinkIcon from '../assets/tiptap-icons/broken_link.png'
import LinkIcon from '../assets/tiptap-icons/link.png'
import FileIcon from '../assets/tiptap-icons/Image_file.png'
import BulletedListIcon from '../assets/tiptap-icons/bulleted_list.png' 
import NumberedListIcon from '../assets/tiptap-icons/numbered_list.png' 

const extensions=[
    StarterKit,
    Underline,
    Link.configure({
      linkOnPaste: false,
      HTMLAttributes: {
        class: 'link-style',
      },
    }),
    Image.configure({
      inline: true,
      allowBase64: true,
    })
]

const TipTap = ({onEditorContentSave, content}) => {
    const editor = useEditor({
        extensions,
        content,
        editorProps: {
          attributes: {
            class: (
              'prose'
            ),
          },
        },
    })

    const setLink = useCallback(() => {
      const previousUrl = editor.getAttributes('link').href
      const url = window.prompt('URL', previousUrl)
  
      if (url === null) {
        return
      }
  
      if (url === '') {
        editor.chain().focus().extendMarkRange('link').unsetLink()
          .run()
  
        return
      }
  
      editor.chain().focus().extendMarkRange('link').setLink({ href: url })
        .run()
    }, [editor])

    const addImage = useCallback(() => {
      const url = window.prompt('URL')
  
      if (url) {
        editor.chain().focus().setImage({ src: url }).run()
      }
    }, [editor])
  

    if (!editor) {
        return null
      }

    const handleEditorContent= () =>{
      const html = editor.getHTML()
      console.log('content',html)
      onEditorContentSave(html)
    }


  return (
    <div className='mx- my-2'>
        <div className='w-full flex flex-wrap bg-gray-300 p-3 gap-2 text-black'>
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
        className={`${editor.isActive('heading', { level: 1 })? 'is-active' : ''} tiptap-h1`}
      >
        H1
      </button>

      <button type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        H2
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        H3
      </button>

      <button type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <img src={NumberedListIcon} width="20" height="20"/>
      </button>
      <button 
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <img src={BulletedListIcon} width="20" height="20"/>
      </button>
      <button type="button" onClick={addImage}>
      <img src={FileIcon} width="20" height="20"/>
      </button>
      <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
      <img src={LinkIcon} width="20" height="20"/>
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive('link')}
      >
        <img src={BrokenLinkIcon} width="20" height="20"/>
      </button>
        </div>
        <div className='border border-gray-500 border-t-0 min-h-[8rem]'>
        <EditorContent editor={editor} className=''/>
        </div>
        <button type="button" onClick={handleEditorContent}>Guardar</button>
    </div>
  )
}

export default TipTap;