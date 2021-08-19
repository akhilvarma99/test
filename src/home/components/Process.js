// libraries
import React, { useState } from 'react';

// css
import '../../css/process.css';

// images
import payment from '../../assets/payment.jpg';
import pickup from '../../assets/pickup.jpg';
import order from '../../assets/order.jpg';

function Process() {
    //    use States
    const [selected, setSelected] = useState(1);

    //  funciton to return jsx
    function MobileProcess(props) {
        if (props.selected === 1) {
            return <> <img src={payment} alt='payment' />  <div className='process-info'> Step 1: Order</div> <span>Click Order Now above & order the meal you love. Use filters to help!</span> </>
        }
        else if (props.selected === 2) {
            return <> <img src={order} alt='order' />  <div className='process-info'>Step 2: Confirm Pick Up Slot </div>  <span>Our agent will confirm your pick up slot over WhatsApp or Email.</span>  </>
        } else {
            return <> <img src={pickup} alt='pickup' />  <div className='process-info'> Step 3: Pick Up & Enjoy</div>  <span>Pick up your order at the confirmed slot & enjoy your Shiok meal.</span> </>
        }
    }

    // funciton to changeTabs 
    const changeTab = (tab) => {
        setSelected(tab)
    }

    return (
        <div class="container ">
            <div class="row">
                <div className='col-12 process-header'>It's simple to begin</div>
            </div>
            <div class='row'>
                <div className='col-12 d-md-none process-img-mobile'> <MobileProcess selected={selected} />  </div>
                <div className='col-12 d-md-none process-mobile-buttons-wrapper '> <ul className='proces-mobile-buttons'>
                    <li className={selected === 1 ? 'selected' : ''} onClick={() => changeTab(1)} >Step 1</li>
                    <li className={selected === 2 ? 'selected' : ''} onClick={() => changeTab(2)} >Step 2</li>
                    <li className={selected === 3 ? 'selected' : ''} onClick={() => changeTab(3)}>  Step 3</li>
                </ul> </div>
                <div className='col-12 d-none d-md-flex'>
                    <div className='col-4 process-img' > <MobileProcess selected={1} /> </div>
                    <div className='col-4 process-img' > <MobileProcess selected={2} /> </div>
                    <div className='col-4 process-img' > <MobileProcess selected={3} /> </div>
                </div>
            </div>






        </div>
    )
}

export default Process
