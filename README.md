# Olapic
Olapic Example

1. What do the client want?
Answer: I've analysed the site examples mentioned in the email to make an idea of the kind if slider that I was asked to do.

2. Where to get the necessary data?
3. 
Answer:

+I've tested Olapic's API by calling to this URL "http://photorankapi-a.akamaihd.net?version=v2.2&auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18"

+I've analysed the API response looking for a URL with this pattern: /customers/{id}/media/{sorting}

+I've found out all the media information I needed was located at "http://z3photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2"

3. Slider

3.1 How to make it look like a slider?
Answer:
+Use of DIVs instead of IMGs
+Background set-up (contain, no-repeat, center)
+Every DIV a unique ID

3.2 How to make visible only 6 pictures?
Answer:
+To use a "cool" effect later, pictures have been hidden by setting their width to 0px

3.3 Navigation
Answer:
+I've set a transaction of 1 second for the element width change
+I check from which ID to which ID is currently visible, and basing on that, I hide the picture on one side, and I show it on the other

3.4 Highlighted specific picture
Answer:
+On hover, the picture size becomes bigger

3.5 Open a modal with the picture
Answer:
+After clicking on the image for the first time, it will open a modal

3.5 Open Olapic picture
Answer:
+After clicking on the modal's picture, a new tab is opened with Olapic's share URL
