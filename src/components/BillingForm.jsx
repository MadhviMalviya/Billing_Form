import React, { useState } from 'react'
import style from './Billing.module.css'

function BillingForm() {
    const [customerName, setCustomerName] = useState("")
    const [billItems, setBillItems] = useState([{ product: "", quantity: 0 }])

    function handleCustomerName(n) {
        setCustomerName(n.target.value)
    }

    function handleProductChange(e, index) {
        const { value } = e.target
        const newBillItems = [...billItems]
        newBillItems[index].product = value
        setBillItems(newBillItems)
    }



    const handleQuantityChange = (e, index) => {
        const { value } = e.target;
        const newBillItems = [...billItems];
        newBillItems[index].quantity = value;
        setBillItems(newBillItems);
      };

    function handleAddItems() {
        setBillItems([...billItems, { product: "", quantity: 0 }])
    }

    const handleCreateBill = (e) => {
        e.preventDefault();
        console.log({ customerName, billItems });
      };

    return (

        <>
            <form>
            <label>Customer Name</label>
                <input type='text' value={customerName} onChange={handleCustomerName} ></input>

                <div className={style.section}>
                {billItems.map((item,index)=>(

                    <div key={index} className={style.box}>
                        <label>Select Product</label>
                        <select >
                            <option>Sugar</option>
                            <option>Tea</option>
                            <option>Oats</option>
                            <option>Milk</option>
                            <option>Flour</option>
                        </select>
                    </div>

                ))}
                    
                    <hr></hr>
                    
                        <label   className={style.box}  >Quantity:</label>
                        <input type={'Number'}  ></input>
                


                    <div className={style.box} >
                        <button type='button' onClick={handleAddItems} >Add more item</button>
                    </div>
                </div>

<hr/>

                <div>
                    <button type='submit' >Create Bill</button>
                </div>
            </form>





        </>
    )
}

export default BillingForm
