import Link from "next/link";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function HomeHero({ block, dataBinding }) {
  return (
    <>

    <section class="bg-red-50 px-16 pt-40 flex ">
        <div className="w-1/2">
        <div>
            <h1 className="text-7xl">{block.title}</h1>
        </div>
        <div
            className="max-w-prose"
            dangerouslySetInnerHTML={{
            __html: md.render(block.description),
            }}
        ></div>
        <div className="">
            {block.button && (
                <Link
                    href={block.button.link}
                      className="px-4 py-2 text-white bg-black"
                    >
                    {block.button.text}
                </Link>
            )}
        </div>
        </div>
        <div class="w-1/2">
            {block.image && (
                <img className="w-full h-auto max-h-[calc(100vh/1.6)] bg-cover object-cover" src={block.image} alt={block.image_alt} />
            )}
        </div>
    </section>

    </>
  );
}
