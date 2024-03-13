import {
  BsEmojiGrinFill,
  BsEmojiAngryFill,
  BsEmojiHeartEyesFill,
  BsEmojiSunglassesFill,
} from "react-icons/bs";

export interface EmojiDetails {
  type: string;
  size: number; // pixels
  color: string; // e.g. 'blue'
}

export class EmojiIconService {
  type: string;
  size: number;
  color: string;

  constructor(emojiDetails: EmojiDetails) {
    this.type = emojiDetails.type;
    this.size = emojiDetails.size;
    this.color = emojiDetails.color;
  }

  get icon() {
    if (this.type === "Grin") {
      return BsEmojiGrinFill({ size: this.size, color: this.color });
    }
    if (this.type === "Angry") {
      return BsEmojiAngryFill({ size: this.size, color: this.color });
    }
    if (this.type === "HeartEyes") {
      return BsEmojiHeartEyesFill({ size: this.size, color: this.color });
    }
    if (this.type === "Sunglasses") {
      return BsEmojiSunglassesFill({ size: this.size, color: this.color });
    }
  }
}
