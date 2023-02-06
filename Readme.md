## I have used jwt token for authentication of user and store in cookie
 ## whenever user is login in it will generate token and it will be store in cookie and after if creator want to see all creator or donate first check for if creator is log in or not with help of auth middleware
 ## I have also used multer for efficent storage of images

 ## for Donation we will just require id of the creator which we want to donate so here as there is no frontend so we have to pass manullay in request.

 ## Now API

 ## for sign up  http://localhost:4000/creator/signup

 ## for login in http://localhost:4000/creator/login

 ## To get all creator  http://localhost:4000/creator/getAllCreator

 ## for Donation http://localhost:4000/Donation/donating/:id

 ## For details of donation from a to b http://localhost:4000/Donation/donationdetails/:id 

