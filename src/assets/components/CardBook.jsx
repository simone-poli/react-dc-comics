

export default function CardBook({comic}) {
    return (
        <div className="col-2 d-flex flex-column align-items-center text-white">
            <a href=""><img src={comic.thumb} alt="" /></a>
            <a href=""><p>{comic.series}</p></a>
        </div>
    )
}