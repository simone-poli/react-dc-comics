import ComicBook from "./comicbook"
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
                        <ComicBook />
                        <div className="d-flex justify-content-center mt-4">
                            <a className="btn btn-primary " href="#" role="button">Load more </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-primary">
                <div className="container d-flex justify-content-between p-5">
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