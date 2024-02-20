import React from 'react';
import { EmojiIconService, EmojiDetails } from '../core/utils/emoji_icon_service';
import '../features/styles/shared/EmojiPanel.css';

export function EmojiPanel() {
    const emojiSize = 36;

    const angryEmoji = new EmojiIconService({type: "Angry", size: 36, color: "yellow"});
    const grinEmoji = new EmojiIconService({type: "Grin", size: 36, color: "yellow"});
    const heartEyesEmoji = new EmojiIconService({type: "HeartEyes", size: 36, color: "yellow"});
    const sunglassesEmoji = new EmojiIconService({type: "Sunglasses", size: 36, color: "yellow"});

    return (
        <div className="emoji-parent">
            <div className="emoji-child">
                {angryEmoji.icon }
            </div>
            <div className="emoji-child">
                {grinEmoji.icon }
            </div>
            <div className="emoji-child">
                {heartEyesEmoji.icon }
            </div>
            <div className="emoji-child">
                {sunglassesEmoji.icon }
            </div>
        </div>
    )
}