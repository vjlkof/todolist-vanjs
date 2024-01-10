export default function generateUniqueId() {
  return `id_${Math.random().toString(36).substr(2, 10)}`;
}
