import{html, createOrderHtml, updateDraggingHtml, moveToColumn  } from './view.js'
import{createOrderData, updateDragging, state } from './data.js'
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null
    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }
    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}
let draggedItem
let id
const handleDragStart = (event) => {
    draggedItem = event.target.closest(".order");
    state.dragging.source = state.dragging.over;
    id = draggedItem.dataset.id;
}
const handleDragEnd = (event) => {
    event.preventDefault();
    const moveTo = state.dragging.over;
    moveToColumn(id, moveTo);
    updateDraggingHtml({over: null})
}
/**
 * Shows Help overlay when the help button is clicked
 * and closes the dialog when close is clicked
 */
const handleHelpToggle = () => {
    const dialog = document.querySelector('[data-help-overlay]');
    if (dialog.hasAttribute('open')) {
        dialog.removeAttribute('open');
    } else {
        dialog.setAttribute('open', true);
    }
}
/**
 * Shows 'addOrder' dialog when Add button is clicked
 * and closes the dialog when Cancel is clicked
 */
const handleAddToggle = () => {
    const dialog = document.querySelector('[data-add-overlay]');
    if (dialog.hasAttribute('open')) {
        dialog.removeAttribute('open');
    } else {
        dialog.setAttribute('open', true);
    }
  };
  /**Copies data from the form and creates a div in html with the new data.
   * Also uses handleAddToggle() to close the overlay after the form has been submitted
   * for a smoother experience
   */
const handleAddSubmit = (event) => {
    event.preventDefault();
    const data = {
        title: html.add.title.value,
        table: html.add.table.value,
        column: 'ordered'
    }
    const props = createOrderData(data)
    const content = createOrderHtml(props)
    const orderedColumn = document.querySelector('[data-area="ordered"]');
    const orderedDiv = orderedColumn.querySelector('[data-column="ordered"]');
    orderedDiv.appendChild(content)
    handleAddToggle();
}
//Two global variables 'order' and 'dialog' declared outside of the functions as they are needed
// in the three following functions in conjunction with each other
let order
const dialog = document.querySelector('[data-edit-overlay]')
/**Opens the edit form when an order item is clicked on.
 * Automatically has the current information for that order
 * in the input fields of the form.
 * Also closes the form if cancel is selected and the order will be unchanged
 */
const handleEditToggle = (event) => {
    event.preventDefault();
    if (dialog.hasAttribute('open')) {
        dialog.removeAttribute('open');
    }
    else {
        order = event.target.closest('.order')
        const orderTitle = order.querySelector('[data-order-title]').innerText
        const orderTable = order.querySelector('[data-order-table]').innerText
        const form = dialog.querySelector('[data-edit-form]')
        form.querySelector('[data-edit-title]').value = orderTitle
        form.querySelector('[data-edit-table]').value = orderTable
        dialog.setAttribute('open', true);
    }
}
/**Creates a new order object using the data from the edit overlay form.
 * Ensures that the item is placed in the correct column and automatically closes the
 * edit overlay after data is submitted.
 */
const handleEditSubmit = (event) => {
    event.preventDefault();
    order.remove()
    const data = {
        title: html.edit.title.value,
        table: html.edit.table.value,
        column: html.edit.column.value
    }
    const props = createOrderData(data)
    const content = createOrderHtml(props)
    const editColumn = document.querySelector(`[data-area="${data.column}"]`);
    const orderedDiv = editColumn.querySelector(`[data-column="${data.column}"]`);
    orderedDiv.appendChild(content)
    dialog.removeAttribute('open')
}
/**Deletes the selected order item and automatically closes the
 * edit overlay at the same time
 */
const handleDelete = (event) => {
    event.preventDefault();
    order.remove()
    dialog.removeAttribute('open')
}
html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)
html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)
html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)
for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}
for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}














