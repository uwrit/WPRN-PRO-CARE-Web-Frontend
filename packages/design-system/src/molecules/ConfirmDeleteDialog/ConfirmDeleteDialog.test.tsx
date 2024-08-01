//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ConfirmDeleteDialog } from '.'

describe('ConfirmDeleteDialog', () => {
  it('renders dialog with confirm delete button', () => {
    const onDelete = jest.fn()
    render(
      <ConfirmDeleteDialog
        open={true}
        onOpenChange={jest.fn()}
        onDelete={onDelete}
        entityName="user"
      />,
    )

    const deleteButton = screen.getByRole('button', { name: 'Delete user' })
    expect(deleteButton).toBeInTheDocument()

    fireEvent.click(deleteButton)
    expect(onDelete).toHaveBeenCalled()
  })
})
