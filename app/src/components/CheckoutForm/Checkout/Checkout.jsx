import React, {useState, useEffect} from 'react';
import {Paper, Stepper, Step, Typography, CircularProgress, Divider, Button, StepLabel} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { commerce } from '../../../lib/commerce';
import useStyles from './styles';
import PaymentForm from '../PaymentForm';

const steps = ['Payment Details'];

const Checkout = ({cart, order, onCaptureCheckout, error}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null); 
    const classes= useStyles();
    useEffect(() => {
        // Create a Checkout Token
        if (cart.id) {
            const generateToken = async () => {
              try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
      
                setCheckoutToken(token);
              } catch {
                
              }
            };
      
            generateToken();
          }
        }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1); 
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1); 

    

    let Confirmation = () => (order.customer ? (
        <>
          <div>
            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
            <Divider className={classes.divider} />
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
          </div>
          <br />
          <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
      ) : (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ));

      if (error) {
        Confirmation = () => (
          <>
            <Typography variant="h5">Error: {error}</Typography>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
          </>
        );
      }

    const Form =() => activeStep===0
    ? <PaymentForm checkoutToken ={checkoutToken} backStep={backStep} nextStep={nextStep} onCaptureCheckout={onCaptureCheckout} /> : "";

    return (
        <div>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center"></Typography>
                    <Stepper activeStep={activeStep} className={classes.Stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </div>
    )
}

export default Checkout
