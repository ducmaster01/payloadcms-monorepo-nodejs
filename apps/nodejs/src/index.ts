import { getPayload } from "payload";
import { config } from "@repo/payload";

async function main() {
  const payload = await getPayload({ config });
  console.log(payload);
}
main();
