
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async ()  => {
            const response = await fetch('http://localhost:3000/cart')
            if(!response.ok) {
                throw new Error('could not fetch cart data')
            }
            const data = await response.data;
            return data;
        }
        try {
            const cartData = await fetchData();
            console.log("::::: cartData :::::", cartData);
            dispatch(cartActions.replaceCart({
                items:cartData.items || [],
                tottalQuantity: cartData.tottalQuantity, 
            }))
        } catch (error) {
            console.log(error);
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Fetching cart Data failed",
                })
              );
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) =>{
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending Data",
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch("http://localhost:3000/cart", {
          method: "PUT",
          body: cart,
        });
        if (!response.ok) {
          throw new Error("sending failed");
        }
      }
  
      try {
        await sendRequest()
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Sent Data",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart Data failed",
          })
        );
      }
  
  
    }
  }