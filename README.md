# payee-project

### Technical Test
As you know, we make payments on behalf of our clients. We like to be able to display the payment details in a clear, concise manner for our employees, who are responsible for ensuring the vendors receive the payments.

Attached is a blob of json data that represents the following: There are multiple vendors ("Payee") who will be paid using payment cards ("Payment"), with the associated invoices attached to each payment ("Remittance").

There is only one requirement - create a webpage that shows each Payee/Payment/Remittance object in a paged interface. Everything else is up to you - overall design, technology used, styling, amount of time spent on the test, etc.

Upload your sample to a private Github account or email to hr@paymerang.com


# Synopsis
I used react, react router on the front end along with bootstrap and emotion to control some of the css. I used a server to serve the react file when we deploy to heroku. This project was about coming up with some certain ways of displaying data in an organized fashion as well as some metrics that the data is telling us.

## landing page
The first page is the display of all clients and a count of the current vendors. I added a search component to filter the object property values via Object.keys that is routed to the individuals json index via a find js method

## detail page
the detail page is a display of the single payee, payment, and remittance properties. I used bootstrap forms to organize the contact info from the address and payment data into grid. I added a map component however did not add a geoencoder api search for time limitations to implement. I used sparklines to manage a total sum figure of all remittance, a rolling total from a time perspective and a individual bar graph for each instance on a scalable perspective. 

### Technologies used

front end
react
react-router
emotion
bootstrap

