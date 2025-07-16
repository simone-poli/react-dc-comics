import comics from "../../../data/comics";
import CardBook from "./CardBook";


export default function ComicBook() {

    return (

        comics.map((comic) => (
            <CardBook key={comic.id} comic={comic} />
           
            // <div key={prop.id} className="col-2 d-flex flex-column align-items-center text-white">

            //     <a href=""><img src={prop.thumb} alt="" /></a>
            //     <a href=""><p>{prop.series}</p></a>

            // </div>
        ))

    )
}