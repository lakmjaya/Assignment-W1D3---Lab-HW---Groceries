const GroceryItem = ({ele}) => {
    return (
      <div className = 'each'>
        <br/>
        <h3>item: {ele.item}</h3>
        <h4>brand: {ele.brand}</h4>
        <h5>units: {ele.units}</h5>
        <h5>quantity: {ele.quantity}</h5>
        
      </div>
  
    );
  }
  
  export default GroceryItem;