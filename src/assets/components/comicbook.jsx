import comics from "../../../data/comics";


export default function ComicBook({props}) {
    console.log(props)
    return (
        
            comics.map((prop) => (
                <div key={prop.id} className="col-2 d-flex flex-column align-items-center text-white">

                    <a href=""><img src={prop.thumb} alt="" /></a>
                    <a href=""><p>{prop.series}</p></a>

                </div>
            ))
        
    )
}