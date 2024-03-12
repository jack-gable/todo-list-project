# Todo List App

This todo list app is a mobile-first react app with the ability to toggle between dark/light themes. Its key features include ability to reorder todos, the use of local storage, and a dark/light theme toggle. The inspiration of this app came from [frontendmentor.com](https://frontendmentor.com).

Some of the challenges I faced when creating this application were the overwriting of the default radio styles and the reordering ability of the list. The styles of the checkmark to signal completion of the todo item was challenging because of the inherent difficulties faced when completely restyling html elements like the radio button. This also becomes an issue because the accessibilty concerns that are built into the default styles. The reordering of todo list items was also a challenge because of the react works where you are unable to directly query an element of the DOM. I over came this challenge by using the useRef hook to keep track of the reordered item.

## Technologies Used

-   _React_
-   _Styled-Components_
-   _Vite_
-   _Netlify_

## Usage

Follow the link below to visit the app. ⬇️

[TodoListApp](https://beamish-horse-c952b8.netlify.app)

## License

[MIT](https://choosealicense.com/licenses/mit/)
