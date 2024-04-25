/*
 Generates random timestamp on the current day, at some point before the current time.

 If the user's current time is 12:00AM, then the generated timestamp will be 12:00AM
 */
export function generateRandomTimestamp(): string {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const min = today.getTime();
  const max = now.getTime();
  const randomTime = new Date(Math.random() * (max - min) + min);

  const month = (randomTime.getMonth() + 1).toString().padStart(2, "0");
  const date = randomTime.getDate().toString().padStart(2, "0");
  const year = randomTime.getFullYear();
  const hours = randomTime.getHours() % 12 || 12;
  const minutes = randomTime.getMinutes().toString().padStart(2, "0");
  const ampm = randomTime.getHours() < 12 ? "AM" : "PM";
  const timezone = Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone.replace("_", " ");

  return `${month}/${date}/${year}, ${hours}:${minutes} ${ampm} - ${timezone}`;
}
