import nav from "../../../data/navbar"

export default function Header() {

    
    




    return (
        <header>
        <div className="container d-flex justify-content-between align-items-center p-3">
            <div>
                <img src="../public/img/dc-logo.png" alt="Logo DC" />
            </div>
            <div className="d-flex gap-3">
               {/* <a href="">characters</a>
                <a href="" className="active">comics</a>
                <a href="">movies</a>
                <a href="">tv</a>
                <a href="">games</a>
                <a href="">collectibles</a>
                <a href="">videos</a>
                <a href="">fans</a>
                <a href="">news</a>
                <a href="">shop</a> */}
                {nav.map((item, index) => {
                    return (
                        <a key={index} className={item.active ? 'active' : ''} href={item.href}>
                            {item.text}
                        </a>
                    );
                })}


            </div>
        </div>
        </header>
    )
}