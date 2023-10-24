import {
  Form,
  FormControl,
  FormActions,
  Label,
  Input,
  Button,
  HelpText,
} from "@twilio-paste/core";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { useEffect } from "react";

export default function LoginForm(props) {
  let iti = {
    getNumber: function () {
      return "";
    },
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const input = document.querySelector("#tel");
      iti = intlTelInput(input, {
        separateDialCode: true,
        utilsScript:
          "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
        initialCountry: "auto",
        geoIpLookup: function (callback) {
          fetch("https://ipapi.co/json")
            .then(function (res) {
              return res.json();
            })
            .then(function (data) {
              callback(data.country_code);
            })
            .catch(function () {
              callback("us");
            });
        },
      });
    }
  });
  return (
    <>
      <Form
        onSubmit={async (event) => {
          event.target.tel.value = await iti.getNumber();
          props.onSubmitHandler(event);
        }}
        method="POST"
        id="login"
      >
        <FormControl>
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" type="text" />
        </FormControl>
        <FormControl>
          <Label htmlFor="tel">Telephone Number</Label>
          <Input name="tel" id="tel" type="tel" autocomplete="on" />
        </FormControl>
        <FormActions>
          <Button type="submit" variant="primary" fullWidth>
            Login
          </Button>
        </FormActions>
      </Form>
    </>
  );
}
