import { Button, NativeSelect, TextField } from "@mui/material";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact_page">
      <img
        src="/src/assets/images/desktop_en_light.webp"
        alt="Contact_computer"
        className="computer_img"
      />
      <aside className="contact_form">
        <section className="contact_intro">
          <h1>Log in with your phone number</h1>
          <p>Enter the number you used to create your account.</p>
        </section>
        <section className="input_section">
          <NativeSelect
            defaultValue={"Germany (+49)"}
            inputProps={{
              name: "country",
              id: "uncontrolled-native",
            }}
            className="native_select"
            sx={{
              "& .MuiInput-underline::after": {
                borderBottomColor: "var(--secondary-color)",
              },
            }}
          >
            <option value={"Germany (+49)"}>Germany (+49)</option>
            <option value={"France (+33)"}>France (+33)</option>
            <option value={"Spain (+34)"}>Spain (+34)</option>
          </NativeSelect>
          <TextField
            id="standard-basic"
            label="123 456 78 90"
            variant="standard"
            sx={{
              "& .MuiInput-underline::after": {
                borderBottomColor: "var(--secondary-color)",
              },
            }}
          />
        </section>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--secondary-font-color)",
            textTransform: "none",
            fontFamily: "var(--font-family)",
            borderRadius: "12px",
          }}
        >
          Next
        </Button>
        <section className="conditions">
          <div>
            <p>Open Account</p>
            <p>Lost access to phone number</p>
            <p>Manage cookies</p>
          </div>

          <NativeSelect
            defaultValue={"English"}
            inputProps={{
              name: "language",
              id: "uncontrolled-native",
            }}
            disableUnderline
            sx={{
              color: "rgb(1, 81, 255)",
              fontSize: "0.9em",
              fontWeight: "600",
            }}
          >
            <option value={"Deutch"}>Deutch</option>
            <option value={"English"}>English</option>
            <option value={"Español"}>Español</option>
            <option value={"Français"}>Français</option>
            <option value={"Italiano"}>Italiano</option>
            <option value={"Português"}>Português</option>
            <option value={"Français"}>Français</option>
            <option value={"Suomi"}>Suomi</option>
          </NativeSelect>
        </section>
      </aside>
    </section>
  );
}
