import { Editor } from '@tinymce/tinymce-react';

interface EditorProps {
  text: string;
  setText: (text: string) => void;
  addKeyword: (selectedText: string) => void;
}

const QuickEditor = ({ text, setText, addKeyword }: EditorProps) => {
  return (
    <Editor
      id="tinyEditor"
      apiKey="9f8zmll26moeglacx0eeid5b7zrc9vn9u65dbrsss5dky4q3"
      onEditorChange={setText}
      value={text}
      init={{
        plugins: ['quickbars'],
        placeholder: '답변을 입력해주세요',
        content_style: `.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
            font-size: 18px;
            font-weight: 400;
            line-height: 140%;
            color: #d3d3d3;
            opacity: 1;
            }
            body {
              margin: 0px
            }
            `,
        quickbars_selection_toolbar: 'Bold addKeyword',
        quickbars_insert_toolbar: false,
        quickbars_image_toolbar: false,
        statusbar: false,
        menubar: false,
        toolbar: false,
        setup: (editor) => {
          editor.ui.registry.addButton('addKeyword', {
            text: 'Keyword',
            onAction: (_) => {
              const selectedText = editor.selection.getContent({
                format: 'text',
              });
              if (selectedText.length > 30) {
                return;
              }
              addKeyword(selectedText);
            },
          });
        },
      }}
    ></Editor>
  );
};

export default QuickEditor;
