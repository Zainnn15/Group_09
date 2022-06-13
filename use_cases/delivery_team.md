## Deliver Order to customer (done by Zain)

### Actor (Delivery driver)
The delivery driver must pick up the given order from local gorecire store and deliver it to the customer

### Pre-conditions
Driver has valid identification. Information about the driver must be accurate to send orders to residence.

### Main Flow
1. The driver gets a nodafication on his/her phone that a customer has ordered and must be delivered.
2. Driver goes to the gorecie store customer has ordered from
3. Driver shows employee the order number and picks up the order
4. Driver drives to the given address from the app
5. Driver arrives and drops the order at the customer door and takes a picture
6. Driver sends the picture to the customer on the app to notify it has arrived
7. Driver repeats 1-6

### Alternate Flows
- If any connection issues arise, preventing the message to be sent before it times out: 
  1. The system will add an error message to the modal, warning the faculty that the message was not sent.
- If a faculty clicks on **Close**, instead of **Submit**:
  1. The modal disappears, and no further action is taken by the system. The contents of the modal will remain, though. Allowing the faculty to pick another group to send the message, for example.

### Postconditions
Once the customer has successfully registered and created an account, they will receive a confirmation email to validate registration.

