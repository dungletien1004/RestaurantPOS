import React, { Component } from 'react';
import Food from './food'
class Foods extends React.Component {
    state = {
        foods: [
        {
            imgUrl: 'https://thumbs.dreamstime.com/b/hamburger-22939858.jpg',
            dishId: 0,
            UnitPrice: 100000,
            leftQuantity: 12,
            type: 'food',
            name: "Combo Hamburger B",
            display: true
        },
        {
            imgUrl: 'https://cdn.tgdd.vn/2021/04/CookProduct/1200-1200x676-87.jpg',
            dishId: 1,
            UnitPrice: 120000,
            leftQuantity: 4,
            type: 'food',
            name: "Combo Hamburger A",
            display: true,
        },
        {
            imgUrl: 'https://kfcvietnam.com.vn/uploads/product/d9e2a3a3bd13fcf569f714339220ea7b.png',
            dishId: 2,
            UnitPrice: 20000,
            leftQuantity: 5,
            type: 'drinks',
            name: "Pepsi Lon",
            display: true
        },
        {
            imgUrl: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
            dishId: 3,
            UnitPrice: 50000,
            leftQuantity: 20,
            type: 'food',
            name: "Cơm Chiên Dương Châu",
            display: true
        },
        {
            imgUrl: 'https://kfcvietnam.com.vn/uploads/product/8f9a4cb3b943dd9d363fe889f1a977f2.png',
            dishId: 4,
            UnitPrice: 20000,
            leftQuantity: 20,
            type: 'drinks',
            name: "Pepsi Vị Chanh Không Calo Lon",
            display: true
        },
        {
            imgUrl: 'https://kfcvietnam.com.vn/uploads/product/4dd31878f442ea6c57c9e6264efa84b2.jpg',
            dishId: 5,
            UnitPrice: 15000,
            leftQuantity: 20,
            type: 'drinks',
            name: "Aquafina",
            display: true
        },
        {
            imgUrl: 'https://kfcvietnam.com.vn/uploads/product/ec86fc55906339789edbd992856951f8.jpg',
            dishId: 6,
            UnitPrice: 20000,
            leftQuantity: 100,
            type: 'drinks',
            name: "Sữa Milo",
            display: true
        },
        {
            imgUrl: 'https://kfcvietnam.com.vn/uploads/combo/876327fff18e80fc6b1ddd0826ba65bf.jpg',
            dishId: 7,
            UnitPrice: 80000,
            leftQuantity: 20,
            type: 'food',
            name: "Cơm Chiên Gà Phi Lê Giòn",
            display: true
        }
    ],
        
        displayState: 0
    }

    

    handleFilterFood = () => 
    {
        console.log('Food');
        this.state.foods.forEach((food) => {
            if (food.type !== 'food')
            {
                food.display = false;
            }
            else if (food.type === 'food')
            {
                food.display = true;
            }
        })
        this.setState({foods: this.state.foods})
    }

    handleFilterDrinks = () =>
    {
        console.log('Drinks');

        this.state.foods.forEach((food) => {
                if (food.type !== 'drinks')
                {
                    food.display = false;
                }
                else if (food.type === 'drinks')
                {
                    food.display = true;
                }
        })
        this.setState({foods: this.state.foods})

    }

    handleFilterAll = () =>
    {
        console.log('All');

        this.state.foods.forEach((food) => {
            food.display = true;
        })
        this.setState({foods: this.state.foods})
    }


    render() { 
        return <div>
        <button onClick={() =>this.handleFilterFood()} type="button" className="btn btn-info ms-2 mt-2 mb-2">Thức Ăn</button>
        <button onClick={this.handleFilterDrinks} type="button" className="btn btn-info ms-2 mt-2 mb-2">Thức uống</button>
        <button onClick={this.handleFilterAll} type="button" className="btn btn-info ms-2 mt-2 mb-2">Tất cả</button>
        

            <div className="container-sm">
                <div className="row align-items-start">
    
                {this.state.foods
                .filter(food => food.display === true)
                .map(
                    food => (

                        <div className="col">
                        <Food 
                        dState = {this.state.displayState}
                        leftQuantity = {food.leftQuantity}
                        name = {food.name}
                        imgUrl={food.imgUrl} 
                        UnitPrice={food.UnitPrice}
                        />
                        </div>
                    )
                )}
           
           </div>
           </div>
        </div>
    }
}
 
export default Foods;