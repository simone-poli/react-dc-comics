export default function Main() {
    return (
        <main>
            <div className="container-fluid bg-black">
                <div className="container">
                    <h1 className="text-white"> Content goes here</h1>
                </div>
            </div>

            <div className="container-fluid bg-primary">
                <div className="container d-flex justify-content-between p-5">
                    <a href="">
                        <div className="d-flex align-items-center ">
                        <img src="../public/img/buy-comics-digital-comics.png" alt="" />
                        <p>Digital Comics</p>
                    </div>
                    </a>
                    <a href="">
                        <div className="d-flex align-items-center">
                        <img src="../public/img/buy-comics-merchandise.png" alt="" />
                        <p>Merchandise</p>
                    </div>
                    </a>
                    <a href="">
                        <div className="d-flex align-items-center">
                        <img src="../public/img/buy-comics-subscriptions.png" alt="" />
                        <p>Subscriptions</p>
                    </div>
                    </a>
                    <a href="">
                        <div className="d-flex align-items-center">
                        <img src="../public/img/buy-comics-shop-locator.png" alt="" />
                        <p>Comic Shop Locator</p>
                    </div>
                    </a>
                    <a href="">
                        <div className="d-flex align-items-center">
                        <img src="../public/img/buy-dc-power-visa.svg" alt="" />
                        <p>DC Power Visa</p>
                    </div>
                    </a>
                </div>
            </div>
        </main>
    )
}