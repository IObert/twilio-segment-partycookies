import {
  Form,
  FormControl,
  FormActions,
  Label,
  Input,
  Button,
} from "@twilio-paste/core";

export default function LoginForm(props) {
  return (
    <>
      <Form method="POST" id="login">
        <FormControl>
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" type="text" />
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
