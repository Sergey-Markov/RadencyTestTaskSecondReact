1. Для того чтобы использовать React и Redux вместе, необходимо добавить пакет react-redux. Это набор компонентов связывающих React-компоненты и Redux-хранилище через контекст Context.
   //npm install react-redux
   2.Компонент <Provider>, оборачивает все дерево компонентов приложения и, используя контекст, предоставляет store и его методы.
   //<Provider store={store}>
   <App />
   </Provider>;
2. Создаем папку Redux
3. Создаем файлы: reducer.js & store.js
4. В файле reducer.js:
   // export const reducer = (state = {}, action) => state;

5. В файле store.js:
   //import { createStore } from "redux";
   import { reducer } from "./reducer";

   export const store = createStore(reducer);

6. Импортиртируем store в index.js
   //import store from "./Redux/store.js";
7. Создаем actions-types в файле actions.js любое название экшена пишется с Большой буквы:
   //export const ADD_NOTES = "ADD_NOTES";
   export const DELETE_NOTES = "DELETE_NOTES";
8. Пишем экшн-криэйтор в actions.js:
   //import { ADD_NOTE, DELETE_NOTE } from "./actions-types";
   export function addNote({ id, nameOfNote, date, text }) {
   return {
   type: ADD_NOTE,
   payload: {
   id,
   nameOfNote,
   date,
   text,
   },
   };
   }
   export function deleteNote(id) {
   return { type: DELETE_NOTE, payload: { id } };
   }
9. для того чтоб дебажить нужно поставить расширение в Хроме redux-dev-tools и прописать в нашем сторе:

- \\\\\ window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**()
- \\\\ npm install -D redux-devtools-extension
