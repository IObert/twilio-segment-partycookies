import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalHeading,
} from "@twilio-paste/core";
import React from "react";
import { useUID } from "@twilio-paste/core/uid-library";
import LoginForm from "./loginForm";
import { Theme } from "@twilio-paste/core/theme";

import onLogin from "./onLogin";
import { useRouter } from "next/navigation";
import { analytics } from "../analytics";

export default function LoginModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mfaModal, setMFAModal] = React.useState({
    visible: false,
    channel: "sms",
  });
  const [msg, setMsg] = React.useState(null);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      phone: event.target.tel.value,
    };
    setUser(user);
    onLogin(user);

    router.push("/");
  };

  return (
    <>
      <Theme.Provider theme="default">
        <Button variant="primary" onClick={handleOpen}>
          Sign up for Rewards
        </Button>

        <Modal
          ariaLabelledby={modalHeadingID}
          isOpen={isOpen}
          onDismiss={handleClose}
          size="default"
        >
          <ModalHeader>
            <ModalHeading as="h3" id={modalHeadingID}>
              Register
            </ModalHeading>
          </ModalHeader>
          <ModalBody>
            <LoginForm onSubmitHandler={handleSubmit} msg={msg} />
          </ModalBody>
        </Modal>
      </Theme.Provider>
    </>
  );
}

function setUser(data) {
  fetch("/api/subscribe", {
    method: "POST",
    body: JSON.stringify({ email: data.email, phone: data.phone }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  localStorage.setItem("user", JSON.stringify(data));
}
