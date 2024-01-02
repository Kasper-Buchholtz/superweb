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
                      className="px-4 py-2 bg-black text-white"
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

    
      <section className="hero-two" data-cms-bind={dataBinding}>
        <div className="hero-two-shape"></div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-two-content">
                <h1 className="mb-4">{block.title}</h1>
                <div
                  className="mb-7 w-xxl-80"
                  dangerouslySetInnerHTML={{
                    __html: md.render(block.description),
                  }}
                ></div>
                <div className="">
                  {block.button && (
                    <Link
                      href={block.button.link}
                      className="btn btn-primary btn-lg"
                    >
                      {" "}
                      {block.button.text}{" "}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-two-banner">
                <img src={block.image} alt={block.image_alt} />
                <div className="hero-two-banner-shape"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
