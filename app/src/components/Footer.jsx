import React, { Fragment }  from "react";
class Footer extends React.Component {
    render() { 
        return (
            <Fragment>
                <div class = 'footer' style = {{textAlign : 'center',
                                                background : "#eeeeee"}}>
                    <img src="img/restaurant.png" alt=""
                                width="300" height="300"  />
                    <h5>Team 45 CNPM 2021</h5>
                    <a href="https://github.com/dungletien1004/RestaurantPOS">
                        <img src="img/github.png" alt=""
                                width="40" height="40" /></a>
                </div>
                <footer class="bg-white">
                    <div class="bg-light py-2">
                        <div class="container text-center">
                            <p class="text-muted mb-0 py-2">© 2021 BKU HK211 Assignment CNPM.</p>
                        </div>
                    </div>
                </footer>
            </Fragment>
        )
    }
}
 
export default Footer;