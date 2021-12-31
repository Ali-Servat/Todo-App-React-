import Search from './Components/Search';
import Form from './Components/Form';
import Todos from './Components/Todos';
import { useState, useEffect } from 'react';
import apiRequest from './apiRequest';
import FilterButtons from './Components/FilterButtons';

function App() {
     const [items, setItems] = useState([]);
     const [newItem, setNewItem] = useState('');
     const [filterType, setFilterType] = useState('All');
     const [editValue, setEditValue] = useState('');
     const [searchValue, setSearchValue] = useState('');

     const API_URL = 'http://localhost:3500/tasks';
     const FILTER_MAP = {
          All: () => true,
          Completed: (item) => item.completed,
          Pending: (item) => !item.completed,
     };
     const FILTER_NAMES = Object.keys(FILTER_MAP);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await fetch(API_URL);
                    if (!response.ok) throw Error('could not fetch data');
                    const json = await response.json();
                    setItems(json);
               } catch (e) {
                    console.log(e);
               }
          };
          fetchData();
     }, []);

     const addItem = async (e) => {
          e.preventDefault();
          const newObject = {
               id: items.length ? items[items.length - 1].id + 1 : 1,
               name: newItem,
               completed: false,
          };
          const updatedItems = [...items, newObject];
          setItems(updatedItems);
          setNewItem('');

          const postOptions = {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(newObject),
          };
          const result = await apiRequest(API_URL, postOptions);
          if (result) console.log(result);
     };

     const checkItem = async (id) => {
          const updatedItems = items.map((item) =>
               item.id === id ? { ...item, completed: !item.completed } : item
          );
          setItems(updatedItems);
          const currentItem = updatedItems.filter((item) => id === item.id);
          const updateOptions = {
               method: 'PATCH',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({ completed: currentItem[0].completed }),
          };
          const requestURL = API_URL + '/' + id;
          const result = await apiRequest(requestURL, updateOptions);
          if (result) console.log(result);
     };

     const deleteItem = (id) => {
          const updatedItems = items.filter((item) => item.id !== id);
          setItems(updatedItems);

          const deleteOptions = {
               method: 'DELETE',
          };
          const requestURL = API_URL + '/' + id;
          const result = apiRequest(requestURL, deleteOptions);
     };

     const handleEdit = (id) => {
          const updatedItems = items.map((item) =>
               item.id === id ? { ...item, name: editValue } : item
          );
          setItems(updatedItems);
          const updateOptions = {
               method: 'PATCH',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({ name: editValue }),
          };

          const requestURL = API_URL + '/' + id;
          const result = apiRequest(requestURL, updateOptions);
     };

     const search = (e) => {
          const value = e.target.value;
          setSearchValue(value);
     };

     const displayedItems = items
          .filter((item) =>
               item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .filter(FILTER_MAP[filterType]);
     return (
          <div className="App">
               <Form
                    newItem={newItem}
                    setNewItem={setNewItem}
                    addItem={addItem}
               />
               <Search searchValue={searchValue} search={search} />
               <FilterButtons
                    FILTER_NAMES={FILTER_NAMES}
                    setFilterType={setFilterType}
                    filterType={filterType}
               />
               <Todos
                    displayedItems={displayedItems}
                    checkItem={checkItem}
                    deleteItem={deleteItem}
                    handleEdit={handleEdit}
                    editValue={editValue}
                    setEditValue={setEditValue}
               />
          </div>
     );
}

export default App;
