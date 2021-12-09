# Student training
Develop a CRUD (Create, Read, Update and Delete) application using the knowledges you’ve acquired through your short training.The application must replicate the basic behavior of a text editor, this is, the app should be able to create, load, editand delete local .txt files.

## Take into consideration:
- Whole implementationmust  be  composed  by two  differentapps:Frontend  (Angular)  and Backend (node with express).
- Frontendsidemust haveat least4components (Header, sidebar, file contentand footer).
- You should use IBM W3Design System(https://w3.ibm.com/w3ds/docs/get-started) in order to achieve a good-looking design.
- Frontend should make use of observables.
- Both frontend and backend should make use of try and catch directives overeach async function.
- All operations must be done over a local directory called ‘data’.
- Backend side must use the ‘fs’ native node module to read the files with the ‘readSync()’ function.
- Frontend must make use of observables.

## Requirements:

### Frontend

1. As a user I’d like to see a header with my application name.
2. As a user I’d like to see a footer with a ‘Copyright’funny and creative disclaimer.
3. As a user, I should be able to see the names ofall the txt documentsfound in the ‘data’ folder,the names must be shown ina card style.
4. Documents names should be loaded in the side bar as soon as application loads.
5. As auser, I should be able to click on a card with the name of the txt file and its content shouldbe rendered in the content component.
6. As a user I’m concerned about application performance,so documents must beread only when they’re being selected.
7. As a user I’d like to have a button which lets me to createa new txt file:
   - It must have a ‘create’ text and and/oran icon related to this function.
   - It should be always enabled.
8. As a user I’d like to have a button which lets me to updatean already loaded txt file. 
   - It must have a ‘update’ text and/or anicon related to this function.
   - It should be enabled onlywhenI’vechanged a file content.
9. As a user I’d like to have a button which lets me to deletean already loaded txt file. 
   - It must have only an icon related to this function.
   - This button should be enabled onlywhen a file is selected.
10. As a user I’dlike the sidebar to show any new changeover the documents, like when a file has been added or deleted.
11. As a user I’dlike to see an alert when a document was successfully saved, updated or deleted.
12. As a user I’d like to see an alert if a process failed (save, update or delete).

### Backend

1. Backend side must have the next endpoints and their respective request handling functions:
    - ‘/documents’
        - GET: it should retrieve an array with all the file names found on data folder.
    - ‘/documents/:name’
        - GET: it shouldreturnan object representing the document for the givenname.
        - POST: it should create a new document with the name provided.
        - DELETE: itshould delete the document corresponding to the given name.
        - PUT: it should update the document content for the given name.
2. Folder and file structure must follow the ‘clean’ architecture, which will be reviewed deeply in incoming sessions.

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
