# Student training
Develop a CRUD (Create, Read, Update and Delete) application using the knowledges you’ve acquired through your short training.The application must replicate the basic behavior of a text editor, this is, the app should be able to create, load, editand delete local .txt files.


## Requirements:

### Frontend

1. As a user I’d like to see a header with my application name.
2. As a user I’d like to see a footer with a ‘Copyright’.
3. As a user, I should be able to see the names of all the txt documents found in the ‘data’ folder,the names must be shown in a card style.
4. Documents names should be loaded in the side bar as soon as application loads.
5. As auser, I should be able to click on a card with the name of the txt file and its content should be rendered in the content component.
6. As a user I’m concerned about application performance,so documents must be read only when they’re being selected.
7. As a user I’d like to have a button which lets me to create a new txt file:
   - It must have a ‘new document’ text and and/oran icon related to this function.
   - It should be always enabled.
8. As a user I’d like to have a button which lets me to update an already loaded txt file. 
   - It must have a ‘update’ text and/or anicon related to this function.
9. As a user I’d like to have a button which lets me to delete an already loaded txt file. 
   - This button should be enabled onlywhen a file is selected.
10. As a user I’dlike the sidebar to show any new changeover the documents, like when a file has been added or deleted.

### Backend

1. Backend side must have the next endpoints and their respective request handling functions:
    - ‘/documents’
        - GET: it should retrieve an array with all the file names found on data folder.
    - ‘/documents/:name’
        - GET: it shouldreturnan object representing the document for the givenname.
        - POST: it should create a new document with the name provided.
        - DELETE: itshould delete the document corresponding to the given name.
        - PUT: it should update the document content for the given name.

### Folder structure:
- Project
    - Frontend
        - Content
    - Backend
        - Content
    - Data
        - myFile.txt
        - File1.txt
        - fileExample.txt
        - thisIsAFile.txt
