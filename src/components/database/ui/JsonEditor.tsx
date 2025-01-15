import { useRef } from 'react';
import Editor, { OnChange } from '@monaco-editor/react';

interface JsonEditorProps {
  value: string;
  onChange?: (value: string | undefined) => void;  // Updated type
  readOnly?: boolean;
  className?: string;
}

export const JsonEditor = ({ value, onChange, readOnly = false, className = '' }: JsonEditorProps) => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  const handleChange: OnChange = (value) => {
    onChange?.(value);
  };

  return (
    <div className={`border border-database-border rounded-md ${className}`}>
      <Editor
        height="100%"
        defaultLanguage="json"
        value={value}
        onChange={handleChange}
        options={{
          minimap: { enabled: false },
          lineNumbers: 'on',
          readOnly,
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          formatOnPaste: true,
          formatOnType: true,
          theme: 'vs-dark',
        }}
        className="bg-database-primary"
        onMount={handleEditorDidMount}
      />
    </div>
  );
};