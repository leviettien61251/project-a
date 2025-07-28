import { Input } from "@/components/ui/input";
import Form from "next/form";

export default function Page() {
  return (
    <>
      <Form action={"#"} formMethod="POST">
        <h1>Login</h1>
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="Password" />
        <Input type="submit" value={"Login"} />
      </Form>
    </>
  );
}
