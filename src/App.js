import useEmblaCarousel from "embla-carousel-react";
import {useEffect} from "react";
import Autoplay from 'embla-carousel-autoplay'

function App() {
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])

    const items = [{name: "Creative", image: "creative"},
        {name: "Business Development", image: "business-development"},
        {name: "Community", image: "community"},
        {name: "Data Science", image: "data-science"},
        {name: "Developer Relations", image: "developer-relations"},
        {name: "Finance", image: "finance"},
        {name: "Founder", image: "founder"},
        {name: "Journalism", image: "journalist"},
        {name: "Marketing", image: "marketing"},
        {name: "Math", image: "math"},
        {name: "Meme maker", image: "meme-maker"},
        {name: "Operations", image: "operations"},
        {name: "Product", image: "product"},
        {name: "Project management", image: "project-management"}
    ]

    return (
        <section className="h-screen flex flex-col justify-between">
            <header className="App-header p-8">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <div className={"text-xs"}>
                    <p className={"uppercase"}>Blossom Land </p>
                    <p className={"pt-8"}>Get notifications: </p>
                    <p className={"py-2 uppercase"}><a href={"HTTPS://T.ME/+YC1DIWBEHYAYM2VK"}>https://t.me/+yc1dIWBeHyAyM2Vk</a></p>
                </div>
            </header>

            <article>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {items.map((item, i) => (
                            <div key={i} className="embla__slide">
                                <div className={"w-96 mx-auto"}>
                                    <img className={"mx-auto w-96"} src={`../img/skills/${item.image}.png`}/>
                                    <div className={"text-xs mx-auto w-96 py-8 text-center uppercase"}>{item.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>

            <footer className={"text-xs h-32 w-full mx-auto text-center p-8"}>~ soon™</footer>
        </section>
    );
}

export default App;
