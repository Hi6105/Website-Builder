"use client";
import React from "react";
import BundledEditor from "../BundledEditor/BundlesEditor";
import { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import "../TextEditor/TextEditor.css";
const axios = require("axios");

const page = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      const blog = {
        blogdata: editorRef.current.getContent(),
      };
      axios
        .post("http://localhost:7000/blog", blog)
        .then((response) => {
          console.log("Data sent successfully");
          console.log("Response from backend:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      //console.log(typeof editorRef.current.getContent());
    }
  };
  return (
    <>
      <Navbar isAdmin={true} />
      <div className="textEditor">
        <BundledEditor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "anchor",
              "autolink",
              "help",
              "image",
              "link",
              "lists",
              "searchreplace",
              "table",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <button onClick={log} className="create">
          Create
        </button>
      </div>
    </>
  );
};

export default page;
