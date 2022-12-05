import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ToDoList from './';

describe('To-do list', ()=>{
    it('Displays an empty list by default with Pending and Completed groups', ()=>{
        render(<ToDoList />)
        expect(screen.getByText('To-do List')).toBeInTheDocument();
        expect(screen.getByText('Pending')).toBeInTheDocument();
        expect(screen.getByText('Completed')).toBeInTheDocument();
    })

    it('Allows users to add new tasks', async ()=>{
        render(<ToDoList />)
        await userEvent.type(screen.getByLabelText('Add task'), 'Complete a technical test using TDD');
        await userEvent.click(screen.getByRole('button', { name: 'Add' }));
        expect(screen.getByText('Complete a technical test using TDD')).toBeInTheDocument();
    })
})