import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CheckCircle } from "lucide-react";
import * as S from "./ContactPage.styles";

interface IFormInputs {
  fullName: string;
  email: string;
  subject: string;
  body: string;
}

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log("Form submitted with data:", data);
    setIsSubmitted(true);

    // Reset form and success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <S.Container>
      <S.Title>Contact Us</S.Title>
      <S.Description>
        Have a question or feedback? Fill out the form below and we'll get back
        to you as soon as possible.
      </S.Description>

      {isSubmitted && (
        <S.SuccessMessage>
          <CheckCircle size={20} />
          Thank you! Your message has been sent successfully.
        </S.SuccessMessage>
      )}

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.RequiredNote>* Required field</S.RequiredNote>
        <S.FormGroup>
          <S.Label htmlFor="fullName">Full Name *</S.Label>
          <S.Input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            $hasError={!!errors.fullName}
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Full name must be at least 3 characters",
              },
            })}
          />
          {errors.fullName && (
            <S.ErrorMessage>{errors.fullName.message}</S.ErrorMessage>
          )}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="email">Email *</S.Label>
          <S.Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            $hasError={!!errors.email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
          )}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="subject">Subject *</S.Label>
          <S.Input
            id="subject"
            type="text"
            placeholder="Enter the subject"
            $hasError={!!errors.subject}
            {...register("subject", {
              required: "Subject is required",
              minLength: {
                value: 3,
                message: "Subject must be at least 3 characters",
              },
            })}
          />
          {errors.subject && (
            <S.ErrorMessage>{errors.subject.message}</S.ErrorMessage>
          )}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="body">Message *</S.Label>
          <S.TextArea
            id="body"
            placeholder="Enter your message"
            $hasError={!!errors.body}
            {...register("body", {
              required: "Message is required",
              minLength: {
                value: 3,
                message: "Message must be at least 3 characters",
              },
            })}
          />
          {errors.body && (
            <S.ErrorMessage>{errors.body.message}</S.ErrorMessage>
          )}
        </S.FormGroup>

        <S.SubmitButton type="submit">Send Message</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
}

export default ContactPage;
