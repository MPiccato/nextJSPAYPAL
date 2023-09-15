"use client"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

const Homepage = () => {
  return (
    <div className="h-screen bg-slate-950 flex justify-center items-center">
      <PayPalScriptProvider options={{
        clientId: "ATa1YfGzjnl7woJcm7qOjvzZlqe7IPyWvu0qfB1eIpcH99WYlMIeTxPmUqyQKTT1rWO48MsxaEVUXslr"
      }}>
        <PayPalButtons
          style={{
            color: "blue",
            layout: "horizontal"
          }}
          createOrder={async () => {
            const res = await fetch('/api/checkout', {
              method: "POST",
            })
            const order = await res.json()
            console.log(order)
            return order.id
          }}
          onApprove={(data, actions) => {
            actions.order.capture()

          }}
          onCancel={(data) => {
            console.log("Order cancelada", data)
          }}

        />
      </PayPalScriptProvider>
    </div>
  )
}

export default Homepage