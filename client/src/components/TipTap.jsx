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
import { uploadImage } from '../helpers/cloudinary';
import Swal from 'sweetalert2';

const extensions = [
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

const TipTap = ({ onEditorContentSave, content }) => {
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
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onEditorContentSave(html);
    },
  })

  const setLink = useCallback( async () => {
    const inputValue = editor.getAttributes('link').href;

    const { value: url } = await Swal.fire({
      input: "url",
      inputValue,
      inputPlaceholder: "Enlace",
      confirmButtonText: "Guardar",
      validationMessage: "Enlace inválido",
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
      allowOutsideClick: true
    });

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

  const handleImage = useCallback(async (e) => {
    const imageUrl = await uploadImage(e);
    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run()
    }
  }, [editor])

  const handleSelectImage = () => {
    const imageInput = document.getElementById("image-input")
    imageInput.click();
  }

  if (!editor) {
    return null;
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
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
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
          <img src={NumberedListIcon} width="20" height="20" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <img src={BulletedListIcon} width="20" height="20" />
        </button>

        <button type="button" onClick={handleSelectImage}>
          <input id="tiptap-image-input" type="file" accept="image/*" name="name" className='hidden' onChange={handleImage} />
          <img src={FileIcon} width="20" height="20" />
        </button>

        <button type='button' onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
          <img src={LinkIcon} width="20" height="20" />
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
        >
          <img src={BrokenLinkIcon} width="20" height="20" />
        </button>

      </div>

      <div className='border border-gray-500 border-t-0 min-h-[8rem]'>
        <EditorContent editor={editor} className='' />
      </div>

    </div>
  )
}

export default TipTap;