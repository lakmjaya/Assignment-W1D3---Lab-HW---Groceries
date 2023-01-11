const GroceryItem = ({ele}) => {
    return (
      <div className = 'each'>
        <br/>
        <h3>item: {ele.item}</h3>
        <h4>brand: {ele.brand}</h4>
        <h5>units: {ele.units}</h5>
        <h5>quantity: {ele.quantity}</h5>
        <div className="each1"><h5>isPurchased: </h5> <span><input value={ele.isPurchased} type="checkbox" /></span></div>  
      </div>
  
    );
  }
  
  export default GroceryItem;