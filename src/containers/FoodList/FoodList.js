import React, { Component } from 'react';
import classes from './FoodList.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
class FoodList extends Component {
    state = {
        options: [
            { id: "1", name: "Pizza", image: image1, price: 34 },
            { id: "2", name: "Burger", image: image2, price: 45 },
            { id: "3", name: "Chicken Pasta", image: image3, price: 45 },
            { id: "4", name: "grilled Sandwich", image: image4, price: 4.5 }

        ],
        cart: [],
        btnEnable: false,
        index: "",
        selectOptionItem: false,
        selectCartItem: false,
        totalPrice: null
    }
    selectOption = (index) => {
        this.setState({ index: index, btnEnable: true, selectOptionItem: true });
    }
    selectCartItem = (index) => {
        this.setState({ index: index, btnEnable: true, selectCartItem: true });
    }

    addToCartHandler = (index) => {

        const updateAvailableOption = [...this.state.options];

        const option = updateAvailableOption[index];
        updateAvailableOption.splice(index, 1);
        const newCart = [];
        newCart.push(option);

        const updateCart = [...this.state.cart];
        const updatedCart = updateCart.concat(newCart);
        let totalPrice = 0;
        // totalPrice = totalPrice + updatedCart.price;
        updatedCart.map(item => {
            totalPrice = totalPrice + item.price;
            return totalPrice;
        });


        this.setState({ options: updateAvailableOption, cart: updatedCart, index: "", selectOptionItem: false, selectCartItem: false, totalPrice: totalPrice });

    }


    removeHandler = (index) => {
        const updateCart = [...this.state.cart];

        const newOption = [];
        const updateOption = [...this.state.options];
        let updatedOptions = [];
        let totalAmount = this.state.totalPrice;
        if (updateCart !== 0) {
            const item = updateCart[index];


            totalAmount = totalAmount - item.price;
            updateCart.splice(index, 1);

            newOption.push(item);
            updatedOptions = updateOption.concat(newOption);

            // totalPrice = totalPrice + updatedCart.price;


        }
        this.setState({ options: updatedOptions, cart: updateCart, index: "", selectOptionItem: false, selectCartItem: false, totalPrice: totalAmount });

    }


    render() {
        const removeButton = "<< Remove from cart";
        const addToCartButton = "Add To Cart >>";

        const leftArray = this.state.options;
        let leftItemList = "";
        if (leftArray.length === 0) {
            leftItemList = (
                <div className={classes.EmptyList}>
                    <h3>No option remains</h3>
                    <p>Select an item from right and click remove </p>
                </div>
            );
        } else {
            const list = leftArray.map((item, index) => {
                return <li className={classes.OptionList} key={item.id} onClick={() => {
                    this.selectOption(index);
                }}>
                    <div className={classes.OptionListItem}>
                        <img
                            className={classes.Image}
                            src={item.image}
                            width="100px"
                            height="100px"
                            alt="Nothing" />
                        <h4 className={classes.OptionItemName}>{item.name}</h4>
                        <h4 className={classes.OptionItemPrice}>${item.price}</h4>

                    </div>
                </li>
            });
            leftItemList =
                <div>
                    <h2>Available Options</h2>
                    {list}
                </div>;
        }

        const rightArray = this.state.cart;
        let rightItemList = "";
        if (rightArray.length === 0) {
            rightItemList = (
                <div className={classes.EmptyList}>
                    <h3>Your cart is empty</h3>
                    <p>Select an item and Add to cart</p>
                </div >
            );
        } else {

            const list = rightArray.map((item, index) => {
                return <li className={classes.CartList} key={item.id} onClick={() => {
                    this.selectCartItem(index);
                }}>
                    <div className={classes.CartListItem}>
                        <img
                            className={classes.Image}
                            src={item.image}
                            width="100px"
                            height="100px"
                            alt="Nothing" />
                        <h4 className={classes.CartItemName}>{item.name}</h4>
                        <h4 className={classes.CartItemPrice}>${item.price}</h4>

                    </div>
                </li>
            });
            rightItemList = <div>
                <h2>Your cart</h2>
                {list}
            </div>;
        }
        let clickTerm = "";
        if (this.state.selectOptionItem === true) {
            clickTerm = () => this.addToCartHandler(this.state.index);
        } else {
            clickTerm = null;
        };
        let clickCartItem = "";
        if (this.state.selectCartItem === true) {
            clickCartItem = () => this.removeHandler(this.state.index);
        } else {
            clickCartItem = null;
        };


        return (
            <div>
                <section className={classes.ProductOverview}>
                    {/* <div>
                        <button className={classes.ScrollBtn}></button>
                    </div> */}

                </section>
                <section className={classes.ProductSection}>
                    <div className={classes.FoodContent}>
                        <div className={classes.Options} >
                            <ul className={classes.ListItems}>
                                {leftItemList}
                            </ul>
                        </div>
                        <div className={classes.Buttons}>
                            <button
                                className={classes.AddtoCartBtn}
                                onClick={clickTerm}
                                disabled={!this.state.btnEnable || !this.state.options.length}>
                                {addToCartButton}</button>
                            <button
                                className={classes.RemoveBtn}
                                onClick={clickCartItem}
                                disabled={!this.state.btnEnable || !this.state.cart.length}
                            >{removeButton}</button>
                        </div>
                        <div className={classes.CartSection}>
                            <div className={classes.Cart}>
                                <ul className={classes.ListItems}>{rightItemList}</ul>
                            </div>
                            <div className={classes.PriceSection}>
                                <h4 className={classes.TotalPrice}>Total price</h4>
                                <h4 className={classes.TotalAmount}>${this.state.totalPrice}</h4>
                            </div>
                        </div>

                    </div>

                </section>

            </div >
        );
    }
}
export default FoodList;