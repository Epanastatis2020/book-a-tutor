/* eslint-disable jquery/no-load */
/* eslint-disable jquery/no-ajax */
/* eslint-disable jquery/no-ready */
//------------------------------------------------
// Setting dependencies
//------------------------------------------------
const dayjs = require('dayjs');

//------------------------------------------------
// Initialising the calendar
//------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    
    $(document).on('click', '.btnLogout', function(event) {
        $.get('/logout').then(() => {
            // clear session storage
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('userEmail');
            sessionStorage.removeItem('userFirstName');
            sessionStorage.removeItem('userLastName');
            sessionStorage.removeItem('userType');
           
            // and go to main page
            window.location.replace('/');
        });
    });


    //build calendar and methods
    var calendarDiv = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarDiv, {
        // Interaction plugin required to detect dateClick actions, selectable actions, and event drag-n-drop/resizing while
        // timeGrid plugin presents a calendar view with a range of dates (e.g. a week) with each date in that range
        // having its own column. The rows represent the hourly periods within each day column
        plugins: ['interaction', 'timeGrid'],

        header: {
            //left: prev,next buttons to move the date range backwards and forwards one week
            left: 'prev,next',
            //center: title represents the current week period (e.g Nov 22 - 28, 2020)
            center: 'title',
            //right: 'timeGridWeek, timeGridDay allow you to choose between the default week view, or a single-day view
            right: 'timeGridWeek,timeGridDay',
        },

        //defaultDate: '2020-11-22', went for international standard date notation to avoid confusion for different locales
        defaultDate: dayjs().format('YYYY/MM/DD'),
        // defaultDate: new Date().toLocaleString(),

        // can click day/week names to navigate views
        navLinks: true,

        //allows events to be edited - dragged, dropped, resized
        editable: true,

        // allow "more" link when too many events
        eventLimit: true,

        events: {
            //retrieving all events from db for the current user
            url: `/api/bookings/'${sessionStorage.getItem('userId')}/${sessionStorage.getItem('userType')}`, // to be updated once endpoints finalised
            method: 'GET',
            failure: function () {
                alert('there was an error while fetching calendar events');
            },
            textColor: 'white', // a non-ajax option
        },

        // Determines if events being dragged and resized are allowed to overlap each other.
        // If given a function, the function will be called every time there is a pair of intersecting
        // events, whether upon a user drag or resize. The function must return true if the overlap
        // should be allowed and false otherwise. The below allows overlapping only if both events are all-day
        eventOverlap: function (stillEvent, movingEvent) {
            return stillEvent.allDay && movingEvent.allDay;
        },

        //clicking an event fires this
        eventClick: function () {},

        //set to true shows an 'all day' row at the top of the calendar
        allDaySlot: false,

        //set the start time of the calendar
        minTime: '08:00:00',

        //set the end time of the calender
        maxTime: '18:00:00',

        //show a marker for the current day and time
        nowIndicator: true,

        //removes empty space in the calendar
        height: 'auto',

        //function handling when the event is resized (ie, time changed)
        eventResize: function (info) {
            var updatedEvent = {
                tutor: info.event.tutor,
                notes: info.event.notes,
                startTime: info.event.start,
                endTime: info.event.end,
                id: info.event.id,
            };

            $.ajax({
                url: '#', // to be updated once endpoints finalised
                type: 'PUT',
                data: updatedEvent,
            });
        },

        //when an existing event is dragged and dropped
        eventDrop: function (info) {
            var updatedEvent = {
                tutor: info.event.tutor,
                notes: info.event.notes,
                startTime: info.event.start,
                endTime: info.event.end,
                id: info.event.id,
            };

            $.ajax({
                url: '#', // to be updated once endpoints finalised
                type: 'PUT',
                data: updatedEvent,
            });
        },
    });

    //------------------------------------------------
    // Rendering the calendar
    //------------------------------------------------

    $(window).load(function () {
        calendar.render();
    });

    //------------------------------------------------
    // Calendar modals
    //------------------------------------------------

    $(document).ready(function () {
        //------------------------------------------------
        // Update/edit event calendar modal
        //------------------------------------------------
        var savebtn = document.getElementById('editModalSave');
        savebtn.addEventListener('click', updateCalendar);

        function updateCalendar() {
            let tutorName = tutorNameReference; // to replace with actual tutor name path
            let tutorID = tutorIDReference; // to replace with actual tutor ID path
            // start date converted to UTC
            let startDt = new Date($('#startdt').val()).toUTCString();
            // end date converted to UTC
            let endDt = new Date($('#enddt').val()).toUTCString();

            // error handling for if the start day/time is after the end day/time
            if (startDt >= endDt) {
                $('#modalErrorText').attr('class', 'show'); //modal to be created
                return;
            } else {
                $('#modalErrorText').attr('class', 'hide');
            }

            $('#calendarModal').modal('hide'); //modal to be created

            var updatedEvent = {
                title: tutorName,
                notes: $('#notes').val(),
                start: startDt,
                end: endDt,
                tutorID: tutorID,
                id: $('#calendarID').text(),
            };

            $.ajax({
                url: '#', // to be updated once endpoints finalised
                type: 'PUT',
                data: updatedEvent,
                success: function () {
                    calendar.refetchEvents(); //re-retrieves the calendar
                },
            });
        }
        //end update/edit event calendar modal

        //------------------------------------------------
        // Delete event calendar modal
        //------------------------------------------------
        var deleteBtn = document.getElementById('deleteEvent');
        deleteBtn.addEventListener('click', deleteEvent);

        function deleteEvent() {
            $('#calendarModal').modal('hide');

            const id = $('#calendarID').text();

            $.ajax({
                url: '#' + id, // to be updated once endpoints finalised
                type: 'DELETE',
                success: function () {
                    calendar.refetchEvents(); //re-retrieves the calendar
                },
            });
        }
        // end delete event calendar modal
    });
});
