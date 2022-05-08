//display current day on calendar (this isn't working)
moment().format('MMMM Do YYYY, h:mm:ss a');

//timeblocks are editable
const save8 = document.getElementById('')
const save9 = document.getElementById('')
const save10 = document.getElementById('')
const save11 = document.getElementById('')
const save12 = document.getElementById('')
const save1 = document.getElementById('')
const save2 = document.getElementById('')
const save3 = document.getElementById('')
const save4 = document.getElementById('')
const save5 = document.getElementById('')
const save6 = document.getElementById('')

//timeblocks change color depending on if they are past, current or future time


//save button to save details added 
const form = document.getElementById('save');

//data is stored in local storage so it persists if page is refreshed


//listen for click of save
form.addEventListener('save', (e) =>{
    let messages = []
    if (save1.value === '' || save1.value == null)
    messages.push('Please add details')
    if (save2.value === '' || save2.value == null)
    messages.push('Please add details')
    if (save3.value === '' || save3.value == null)
    messages.push('Please add details')
    if (save4.value === '' || save4.value == null)
    messages.push('Please add details')
    if (save5.value === '' || save5.value == null)
    messages.push('Please add details')
    if (save6.value === '' || save6.value == null)
    messages.push('Please add details')
    if (save7.value === '' || save7.value == null)
    messages.push('Please add details')
    if (save8.value === '' || save8.value == null)
    messages.push('Please add details')
    if (save9.value === '' || save9.value == null)
    messages.push('Please add details')
    if (save10.value === '' || save10.value == null)
    messages.push('Please add details')
    if (save11.value === '' || save11.value == null)
    messages.push('Please add details')
    if (save12.value === '' || save12.value == null)
    messages.alert('Please add details')
    e.preventDefault()
});

//futurestate
//create timeblocks


//add time to timeblocks


//add save button to timeblocks

