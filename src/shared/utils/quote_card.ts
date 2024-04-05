const POSSIBLE_MODAL_COLORS = [
  "#5b0a2a",
  "#2a0a5b",
  "#0a5b2a",
  "#1b2b56",
  "#6e0c6c",
];

export function getModalColor(): String {
  return POSSIBLE_MODAL_COLORS[
    Math.floor(Math.random() * POSSIBLE_MODAL_COLORS.length)
  ];
}
