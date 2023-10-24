import { analytics } from "../../utils/analytics";
//Only runs on successful login

export default function onLogin({ email, phone }) {
  const traits = {
    email,
    phone,
    signedUpForRewards: true,
  };
  analytics.identify({
    email,
    traits,
  });

  return;
}
