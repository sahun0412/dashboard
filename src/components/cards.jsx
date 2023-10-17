// import lock from "../images/lock.jpg"
import dollar from "../images/dollar.svg";
import arrowup from "../images/arrow.svg";
import orders from "../images/orders.svg";
import wallet from "../images/wallet.svg";
import bag from '../images/bag.svg';
import arrowdown from "../images/arrowdown.svg";


const Cards = () => {
  return (
    <div className="container-fluid d-flex   flex-wrap justify-content-sm-center ms-5 ms-md-0 align-items-center">
      
      {/* Card1 */}



      <div
        className="card mt-2  border-5 border-light rounded-3 "
        style={{ width: "250px" }}
      >
        <div className="card-body d-flex align-items-center">
          <div
            className="bg-success bg-opacity-25 rounded-5 text-center"
            style={{ height: "60px", width: "60px" }}
          >
            <img className="mt-2" src={dollar} alt="" width={40} height={40} />
          </div>
          <div className="card-title  mt-2 text-center">
            <i className="text-secondary">Earnings</i> <br /> <b>$198K</b>
            <div>
            <img src={arrowup} className="fw-bold text-success" height={20} width={20}></img>
              <span className="fw-bold fs-6 text-success">37.8%</span>{" "}
              <span>this month</span>
            </div>
          </div>
        </div>
      </div>
      {/* card2 */}

      <div
        className="card mt-2  border-5 border-light rounded-3 "
        style={{ width: "250px" }}
      >
        <div className="card-body d-flex align-items-center">
          <div
            className="bg-info bg-opacity-25 rounded-5 text-center"
            style={{ height: "60px", width: "60px" }}
          >
            <img className="mt-2" src={orders} alt="" width={40} height={40} />
          </div>
          <div className="card-title  mt-2 text-center">
            <i className="text-secondary">Orders</i> <br /> <b>$2.4K</b>
            <div>
              <img src={arrowdown} height={20} width={20}></img>{" "}
              <span className="fw-bold fs-6 text-danger">2%</span>{" "}
              <span>this month</span>
            </div>
          </div>
        </div>
      </div>


      {/* card3 */}

      <div
        className="card mt-2  border-5 border-light rounded-3"
        style={{ width: "250px" }}
      >
        <div className="card-body d-flex align-items-center">
          <div
            className="bg-primary bg-opacity-25 rounded-5 text-center"
            style={{ height: "60px", width: "60px" }}
          >
            <img className="mt-2" src={wallet} alt="" width={40} height={40} />
          </div>
          <div className="card-title  mt-2 text-center">
            <i className="text-secondary">Balances</i> <br /> <b>$2.4K</b>
            <div>
            <img src={arrowdown} height={20} width={20}></img>
              <span className="fw-bold fs-6 text-danger">2%</span>{" "}
              <span>this month</span>
            </div>
          </div>
        </div>
      </div>


      {/* card4 */}

      <div
        className="card mt-2   border-5 border-light rounded-3"
        style={{ width: "250px" }}
      >
        <div className="card-body d-flex align-items-center">
          <div
            className="bg-danger bg-opacity-25 rounded-5 text-center"
            style={{ height: "60px", width: "60px" }}
          >
            <img className="mt-2" src={bag} alt="" width={40} height={40} />
          </div>
          <div className="card-title  mt-2 text-center">
            <i className="text-secondary">Total Sales</i> <br /> <b>$89K</b>
            <div>
            <img src={arrowup} className="fw-bold text-success" height={20} width={20}></img>
              <span className="fw-bold fs-6 text-success">11%</span>{" "}
              <span>this month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
