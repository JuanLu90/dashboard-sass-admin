export default function randomDelay(min = 800, max = 2500): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
