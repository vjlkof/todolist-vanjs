export default function styleCompleteStatusDom(item, itemData, styles) {
  itemData.classList.toggle(styles.completed, item.isCompleted);
}
