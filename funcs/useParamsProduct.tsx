import { useParams } from "next/navigation";

export default function getParamProduct() {
  const params = useParams<{ tag: string; detail: string }>();

  return params;
}
