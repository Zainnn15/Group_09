## Employees/Managers editing items/product inventory (done by Rupin)

### Actor (User)
Employees/Managers with a valid account in the system.

### Pre-conditions
Employees/Managers are logged into the system. 

### Main Flow
1. The employee/manager clicks on **All Products**.
2. The system loads a list of all the products that are currently in stock in the grocery store.
3. The employee/manager clicks on **Out Of Stock**.
4. The system changes the item that was clicked from in stock to out of stock.
5. The employee/manager repeats until all of the stock is updated.
6. The employee/manager clicks the **Update** button.
7. The system will successfully update the website and all the customers will be able to see the updated website.

### Alternate Flows
- If any connection issues arise, preventing the message to be sent before it times out: 
  1. The system will add an error message to the modal, warning the faculty that the message was not sent.
- If a faculty clicks on **Close**, instead of **Submit**:
  1. The modal disappears, and no further action is taken by the system. The contents of the modal will remain, though. Allowing the faculty to pick another group to send the message, for example.

### Postconditions
After a faculty has succesfully send a message, each member of the group (as well as the faculty) receives an email with its contents.
