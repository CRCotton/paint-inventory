# Stock Status Web App

This project was created with ReactJS and Semantic-UI.

Paint Inventory was designed for a mock house painting company called "A Paint Company".

It provides a kanban-style view of available paint colours to mimic the company's "Kanban style" paint chart using sticky notes on a white board.

## About "A Paint Company"

A Paint Company is a small painting company based out of British Columbia. They were recently hired to paint the exterior of houses for a remote community. The houses can only be one of 5 different colours: blue, grey, black, white, or purple. There are two managers (John and Jane) who manage stock of paints as well as several painters.

## Assumptions

- Will only require the five different colours of paint
- Only one 'sticky note' per colour
- Internal facing app only
- All users have permission to edit/view paint amounts

## Decisions

### Numbered Colours

    Chose to add a key value for each paint colour being tracked. This was done to future-proof with the idea that there may be other colours in the future that can be handled by this app with some additional features. This can help eliminate human-error in being able to describe a specific paint, not just the colour as an additional verification factor. Lastly, if there are different batches in future of the same colour this will be able to be handled.

### Single Page View/Edit/Update

    I made the decision to leave this as a single page app.

    There are multiple users who need to access this app from varying devices (laptop, mobile) and who have different levels of computer skills.

    This view is the most similar to the current process of "sticky notes on a white board", where anyone can change which swim lane each paint is in.

    ReactJS allows seemless single-page updating with quick responsiveness for this app's features.
