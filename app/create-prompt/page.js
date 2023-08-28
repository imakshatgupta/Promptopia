"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [Post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {};

  return (
    <Form
      type="Create"
      handleSubmit={createPrompt}
      submitting={submitting}
      setPost={setPost}
      post={Post}
    />
  );
};

export default CreatePrompt;
