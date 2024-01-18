import axios from "axios";
import { ChangeEvent, ChangeEventHandler, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { articleApiUrl, imageApiUrl } from "../utils/endpoints";

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

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    console.log(file);

    const formData = new FormData();
    formData.append("file", file as Blob);

    const response = await axios.post(imageApiUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
  };

  return (
    <main>
      <form
        className="article-form"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
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

        <fieldset>
          <legend>Images</legend>

          <label>
            Add an image
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Form;
