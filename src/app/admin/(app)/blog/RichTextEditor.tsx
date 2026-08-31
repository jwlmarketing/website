"use client";

import { Editor } from "@tinymce/tinymce-react";

export default function RichTextEditor({
  name,
  initialValue,
}: {
  name: string;
  initialValue: string;
}) {
  return (
    <Editor
      id={`editor-${name}`}
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      licenseKey="gpl"
      initialValue={initialValue}
      init={{
        height: 520,
        menubar: "file edit view insert format tools table help",
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "media",
          "table",
          "code",
          "codesample",
          "fullscreen",
          "preview",
          "wordcount",
          "quickbars",
        ],
        toolbar:
          "undo redo | blocks | bold italic underline strikethrough | forecolor backcolor | " +
          "align | bullist numlist | link image media table codesample | blockquote charmap emoticons | " +
          "removeformat | code fullscreen preview",
        content_style: "body { font-family: 'DM Sans', sans-serif; font-size: 15px; }",
        branding: false,
        promotion: false,
      }}
      textareaName={name}
    />
  );
}
