import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

function App() {
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])

    const items = [{name: "Creative", image: "creative"},
        {name: "Community", image: "community"},
        {name: "Meme maker", image: "meme-maker"},
        {name: "Data Scientist", image: "data-science"},
        {name: "Developer", image: "developer"},
        {name: "West Ham", image: "west-ham"},
        {name: "Developer Relations", image: "developer-relations"},
        {name: "Finance", image: "finance"},
        {name: "Threadooor", image: "threadooor"},
        {name: "Founder", image: "founder"},
        {name: "Business Development", image: "business-development"},
        {name: "Journalist", image: "journalist"},
        {name: "Marketing", image: "marketing"},
        {name: "Mathematician", image: "math"},
        {name: "Operations", image: "operations"},
        {name: "Product", image: "product"},
        {name: "Project management", image: "project-management"},
    ]

    return (
        <section className="h-screen flex flex-col justify-between">
            <div className={"flex flex-col justify-items-stretch"}>
                <header className="p-8">
                    <div className={"text-xs place-content-center"}>
                        <p className={"uppercase text-center"}>Blossom ~ soon™</p>
                    </div>
                </header>

                <article className={"mt-8"}>
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container">
                            {items.map((item, i) => (
                                <div key={i} className="embla__slide">
                                    <div className={"w-96 mx-auto"}>
                                        <img className={"mx-auto w-96"} src={`../img/skills/${item.image}.jpg`}
                                             alt={item.name}/>
                                        <div
                                            className={"text-xs mx-auto w-96 py-8 text-center uppercase"}>{item.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>

            </div>
            <footer className={"text-xs h-24 dotted-01 flex items-center"}>
                <div className={"w-24 mx-auto text-xs flex flex-row place-content-center text-center gap-x-8"}>
                    <div className={"uppercase"}>
                        <a className={"cursor-pointer"} href="https://twitter.com/blossomland_" target="_blank" rel="noreferrer noopener">twitter</a>
                    </div>
                    <div>
                        <a target={'_blank'} className={"cursor-pointer"} rel="noreferrer noopener"
                           href={"https://t.me/+M7kbmbbbdnI2NDM0"}>
                            <span className={"uppercase"}>Telegram</span></a>
                    </div>
                </div>

            </footer>
        </section>

    );
}

export default App;
