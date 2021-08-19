// libraries
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

// css
import '../../css/items.css';


// static variables

const itemsList = [{ image: 'https://cdn.shopify.com/s/files/1/0302/0714/8116/products/SpainBlackPlums.png?v=1627460393', itemName: 'Fruits (Jurong - 23 min🚶🏻‍♂️from Boon Lay MRT)', originalAmount: '$19.80', discountAmount: '$9.90' },
{ image: 'https://cdn.shopify.com/s/files/1/0302/0714/8116/products/SpainBlackPlums.png?v=1627460393', itemName: 'Bakery (Rochor - 2 min🚶🏻‍♂️ from Rochor MRT)', originalAmount: '$18.80', discountAmount: '$8.90' },
{ image: 'https://cdn.shopify.com/s/files/1/0302/0714/8116/products/SpainBlackPlums.png?v=1627460393', itemName: 'Japanese (Punggol - 5 min🚶🏻‍♂️from Oasis LRT)', originalAmount: '$8.80', discountAmount: '$5.90' },
{ image: 'https://cdn.shopify.com/s/files/1/0302/0714/8116/products/SpainBlackPlums.png?v=1627460393', itemName: 'Japanese (Geylang - 15 min 🚶 from Eunos MRT)', originalAmount: '$13.80', discountAmount: '$8.90' }]


Modal.setAppElement('#root')

function Items(props) {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [cart, setCart] = useState([]);

    // useEffect
    useEffect(() => {
        props.setCart(cart)
    }, [cart])


    // function to open modal
    function openModal() {
        setIsOpen(true);
    }

    // function to close modal
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div className='row items-wrapper'>
                {itemsList.map((item, index) => {
                    return (
                        <div className='col-6 col-lg-3 items-wrapper-inner' key={index} >
                            <img className='item-image' src={item.image} alt={item.image} />
                            <div className='item-description'>{item.itemName}</div>
                            <div className='item-original-amount'> {item.originalAmount}</div>
                            <div className='item-discount-amount'> {item.discountAmount}</div>
                            <button className='add-to-cart' onClick={() => { openModal(); setCart(cart => [...cart, item]); }}>Add to cart</button>
                        </div>
                    )
                })}
            </div>

            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}

                contentLabel="Example Modal"
            >  <div className='modal-wrapper' >
                    <h2 className='modal-discount' >BUY 3 GET EXTRA 5% OFF</h2>
                    <span className='close-button' onClick={closeModal}>X</span>
                    <div className='row cart-added-item' >
                        <div className='col-3' > <img className='cart-item-image' src={cart[cart.length - 1] && cart[cart.length - 1].image} alt='cart-item' /> </div>
                        <div className='col-6' > {cart[cart.length - 1] && cart[cart.length - 1].itemName} </div>
                        <div className='col-3 cart-quantity' >Qty 1 </div>
                    </div>

                    <div className='modal-view-cart'>View Cart ({cart.length})</div>
                    <div className='modal-view-cart' onClick={() => { setCart([]); closeModal(); }}>Clear Cart </div>
                </div>
            </Modal>
        </>
    )
}

export default Items
