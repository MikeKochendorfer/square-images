In order to use this project:

cd into the root folder ('/square-images') and run the command 'npm install'

In the root folder create a directory titled 'images' and another titled 'processed-images'.  

Add the images you wish to convert into square images into the 'images' folder you just created.

Run the command 'node squareImages' in the terminal and the converted images will be placed into the 'processed-images' folder.

Background colors and image sizes are easily customizable with a few edits to the squareImage() function.  Currently, the function will compare the height and the width of the original image and choose the largest of the two for the height and width of the new squared image.  The visual aspect ratio will remain the same and the image will be centered on a transparent background.