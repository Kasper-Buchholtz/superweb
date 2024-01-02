import Link from "next/link";
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function AboutHero({ block, dataBinding }) {

    const renderPlacer = (param) => {
        switch (param) {
            case 'front_bottom':
                return 'image-one';
            case 'back_top_right':
                return 'image-two';
            case 'back_top_left':
                return 'image-three';
            default:
                return '';
        }
    };

    return (
        <>
        </>
    );
}
