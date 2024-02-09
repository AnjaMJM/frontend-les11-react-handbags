import './App.css'
import Button from "./components/Button/Button.jsx";
import ProductArticle from "./components/Product/ProductArticle.jsx";
import {products} from "./constants/products.js";
import Tile from "./components/Tile/Tile.jsx";
import brand from "./assets/brand.png"
import our_story from "./assets/our_story.png"

function App() {
    function handleCollectionClick() {
        return console.log("To the collection")
    }

    function handleShopBagsClick() {
        return console.log("Shop all bags")
    }

    function handlePreOrderClick() {
        return console.log("Pre-order")
    }


    return (
        <>
            <header>
                <h1>Handbags & Purses</h1>
                <nav>
                    <Button
                        handleClick={handleCollectionClick}
                    >
                        To the collection
                    </Button>
                    <Button
                        handleClick={handleShopBagsClick}
                    >
                        Shop all bags
                    </Button>
                    <Button
                        disabled
                    >
                        Pre-Order
                    </Button>
                </nav>
            </header>

            <main>
                {products.map(({imgURL, name, price, spotLight}) => {
                    return <ProductArticle key={imgURL}
                                           imgURL={imgURL}
                                           name={name}
                                           price={price}
                                           spotlight={spotLight}/>
                })}
            </main>

            <footer>
                <div>
                    <Tile
                        imgURL={brand}
                        imgTitle="The Brand"
                    />
                    <Tile
                        title="The Brand"
                    >
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, animi consectetur cumque
                            debitis dolorem eius, impedit, laborum mollitia nostrum perspiciatis provident ratione
                            recusandae tenetur vitae voluptatem. Aspernatur consequatur distinctio et maxime sed sit
                            veniam? Ad aliquam maxime necessitatibus praesentium totam!</p>
                    </Tile>
                </div>
                <div>
                    <Tile
                        title="Our story"
                    >
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, animi aut
                                cupiditate fuga fugit maiores neque odio pariatur rerum unde.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, maxime.</p>
                    </Tile>

                    <Tile
                        imgURL={our_story}
                        imgTitle="Our Story"
                    />
                </div>
            </footer>

        </>
    )
}

export default App;
