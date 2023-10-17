import hand from "../images/hand.svg"

export function User(){
    return(
        <div className="container-fluid">
            <p className="fw-bold mt-5 ms-5">Hello Shahrukh <img src={hand} height={20} width={20}></img></p>
        </div>
    )
}