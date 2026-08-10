import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const chat = await readFile(new URL("../app/delivery/PlanetXWebChat.tsx", import.meta.url), "utf8");
const delivery = await readFile(new URL("../app/delivery/DeliveryContent.tsx", import.meta.url), "utf8");

for (const expected of [
  'storeId: "PX"',
  'sod-web-chat:PX',
  'smsConsent',
  'required type="checkbox"',
  'Reply YES to confirm',
  '/api/web-chat/session',
  '/api/web-chat/messages',
  '/api/web-chat/id-review',
  'NEW_CUSTOMER',
  'RETURNING_CUSTOMER',
  '/api/web-chat/phone',
  'phoneConfirmation: replacementPhoneConfirmation',
  'phoneVersion: conversation.phoneVersion',
  'START ANOTHER ORDER',
  '/api/web-chat/order-cycle',
  'requestId: crypto.randomUUID()',
  'securely retained for future identity and address verification',
]) assert.ok(chat.includes(expected), `Missing Web Chat contract: ${expected}`);

assert.ok(delivery.includes("<PlanetXWebChat />"), "Delivery page must render Planet X Cannabis Web Chat");
assert.ok(!chat.includes('storeId: "PC"') && !chat.includes("sod-web-chat:PC"), "Reference store identity must not remain");
console.log("Planet X Cannabis consent Web Chat contract passed.");
