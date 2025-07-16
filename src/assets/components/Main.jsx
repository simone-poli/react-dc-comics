import comics from "../../../data/comics"
import list from "../../../data/list"
export default function Main() {









    return (
        <main>
            <div className="container-jumbotron" id="jumbotron">
                <img src="../public/img/jumbotron." alt="" />
            </div>


            <div className=" bg-black">
                <div className="container">
                    <div className="row pt-4">
                        {comics.map(({ series, thumb }, index) => (
                            <div key={index} className="col-2 d-flex flex-column align-items-center text-white">

                                <a><img src={thumb} alt="" /></a>
                                <a><p className="mb-0">{series}</p></a>

                            </div>
                        ))}
                        <div className="d-flex justify-content-center mt-4">
                            <a className="btn btn-primary " href="#" role="button">Load more </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-primary">
                <div className="container d-flex justify-content-between p-5">
                    {/* <a href="">
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
                    </a> */}
                    {list.map(({ href, img, text },index) => {
                        return (
                            <a href={href} key={index}>
                                <div className="d-flex align-items-center">
                                    <img src={img} alt="" />
                                    <p>{text}</p>
                                </div>
                            </a>
                        )
                    }
                    )}


                </div>
            </div>
        </main>
    )
}