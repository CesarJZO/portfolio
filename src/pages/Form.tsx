import axios from "axios";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { articleApiUrl } from "../utils/endpoints";

import "./Form.css";

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const data = {
      title: formData.get("title"),
      content: formData.get("content"),
    };

    try {
      await axios.post(articleApiUrl, data, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      console.log("Data sent!", data);
      navigate("/blog");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <form
        className="article-form"
        method="post"
        encType="multipart/form-data"
        onSubmit={(e) => handleSubmit(e)}
      >
        <fieldset>
          <legend>Create Article</legend>

          <label>
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="My super article"
            />
          </label>

          <label>
            Content
            <textarea
              id="content"
              name="content"
              placeholder="Write a great article"
            />
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Form;
