This is the repo of Our Idea SkinTalk
There are 3 Folders in the Main Directory:

1.Chetan_Project:

It runs 2 Servers one on Python and another on NodeJs. The Python server is Built to implement Machine Learning to Detect the face. The NodeJs Server sends API call to the server on the python and retrieves the Data set 
Revealing the skin Problem faced by the Individual.We were using Nodejs Server only earlier but there was some problem integrating the Python ML Code through the child process library , so we used two servers running
at the same time , one is the flask server which manages the ML Code and responds to the Node js server . A Post request is sent to the Node Js server and then it calls an API from the Flask Server.


2.Node_Project-main:

This NodeJs backend was built to Integrate with the Flutter Frontend environment. This backend contains Login , User Registration , Image upload and Slot booking options for the User.Registration API uses the Springedge OTP
System to authenticate user login. Image Upload is done through Multer and prescription Upload API is also present in the code. 


3.acne-detection-main:

This Project contains the Specially trained ML model with a dataset so that we can give satisfactory results to our Users after detecting the kinds of pimples , spots ,etc on their face with the help of image they Upload.
We have created a machine learning model using Python that is capable of detecting various skin conditions, including skin pimples, acne, and dark spots. This model leverages data and machine learning techniques to analyze 
images of the skin and identify these specific skin conditions, providing a valuable tool for early detection and assessment of skincare issues. This technology has the potential to improve dermatological diagnosis and promote proactive skincare management.




In our project, the frontend, which is the user interface (UI) that users interact with, has been developed using the Flutter framework. Flutter is an open-source UI toolkit created by Google for building natively compiled applications for mobile, web, 
and desktop from a single codebase. 

The UI design for our project has been created using Figma. 
