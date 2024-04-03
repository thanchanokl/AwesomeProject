import React, { useEffect, useState } from 'react';
import { View, FlatList , TouchableOpacity  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import TodoItem from '../../components/week9/TodoItem';
import TodoStorage from '../../storages/TodoStorage';

export default function TodoList() {
    const [todos , setTodos] = useState(); 

    const onLoad = async () => {
        try {
            let data = await TodoStorage.readItems();
            setTodos(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        onLoad();
    }, []);

    const onCreate = async () => {
        try {
            let new_data = {
                id: '_' + Math.random().toString(36).substr(2, 9),
                title: "",
                completed: false,
            };
            let updatedTodos = [...todos, new_data];
            setTodos(updatedTodos);
            await TodoStorage.writeItems(updatedTodos);
        } catch (error) {
            console.log(error);
        }
    };     

    const onUpdate = async (new_title, id) => {
        try {
            let updatedTodos = todos.map(todo =>
                todo.id === id ? { ...todo, title: new_title } : todo
            );
            setTodos(updatedTodos);
            await TodoStorage.writeItems(updatedTodos);
        } catch (error) {
            console.log(error);
        }
    }; 

    const onCheck = async (id) => {
        try {
            // Toggle the completed status of the todo item
            const updatedTodos = todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
    
            // Move completed items to the bottom
            const sortedTodos = [
                ...updatedTodos.filter(todo => !todo.completed),
                ...updatedTodos.filter(todo => todo.completed)
            ];
    
            // Update the state with the rearranged array
            setTodos(sortedTodos);
    
            // Write the updated todos array to storage
            await TodoStorage.writeItems(sortedTodos);
        } catch (error) {
            console.log(error);
        }
    };
    
       

    const onDelete = async (id) => {
        try {
            let updatedTodos = todos.filter(todo => todo.id !== id);
            setTodos(updatedTodos);
            await TodoStorage.writeItems(updatedTodos);
        } catch (error) {
            console.log(error);
        }
    };  

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ marginTop: 15 }}
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TodoItem item={item} onUpdate={onUpdate} onCheck={onCheck} onDelete={onDelete} />
                )}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: "lightblue",
                    padding: 10,
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: 25,
                    position: 'absolute',
                    right: 10,
                    bottom: 10,
                }}
                onPress={onCreate}
            >
                <FontAwesome name='plus' size={26} />
            </TouchableOpacity>
        </View>
    );
}
