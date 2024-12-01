import './Amazon_box.css'
export default function AmazonMoney() {
    return(
        <>
            <div className="money-main">
            <div className="money">
            <h1>₹59,999 </h1>
            <p style={{color: "green"}}><span  style={{ textDecoration: 'line-through' , color:"black"}}>₹69,900</span> 14% off</p>
            <p>Free delivery</p>
            <p style={{color: "green"}}> Save extra with combo offers</p>
            <p>Upto <b>₹32,950</b> Off on Exchange</p>
            </div>
            </div>
        </>
    )
}