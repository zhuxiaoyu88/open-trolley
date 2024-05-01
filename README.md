# Open Trolley

Open Trolley is an online library. This project covers testing using Cypress with 3 main features. Find the test cases below:

### As a buyer, when I search for book(s), I want to sort it based on lowest to highest price so I can get the best deal.

- [x] verify text sorting is valid
- [x] verify sorting data is valid
- [x] verify sorting data valid with pagination
- [x] verify sorting data valid with view per page
- [x] verify sorting data valid with filter price range
- [ ] verify sorting data invalid: Rp 0
- [ ] verify sorting data invalid: no price provided

### As a buyer, I want to add and subtracts product on the cart so I can adjust my preferences based on my budget 

- [ ] verify add a book in cart
- [ ] verify reduce a book in cart
- [ ] verify reduce a book to 0
- [ ] verify add book over quantity
- [ ] verify empty cart
- [ ] verify reduce multiple product
- [ ] verify add multiple product
- [ ] verify quantity still exists after logout

### As a buyer, I want to bookmark a product so I could buy it in future

- [ ] verify add to wish list with selecting a list
- [ ] verify add to wish list without selecting a list
- [ ] verify add to wish list with same list
- [ ] verify add to wish list to empty list title
- [ ] verify the bookmarked book exist in wish list
