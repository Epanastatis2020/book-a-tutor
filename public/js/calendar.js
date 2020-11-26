/* eslint-disable jquery/no-load */
/* eslint-disable jquery/no-ajax */
/* eslint-disable jquery/no-ready */

//------------------------------------------------
// Initialising the calendar
//------------------------------------------------
// only want to do it if we are showing the calendar page
var calendarDiv = document.getElementById('calendarDiv');

if (calendarDiv) {
    document.addEventListener('DOMContentLoaded', function () {
        //build calendar and methods

        var calendar = new FullCalendar.Calendar(calendarDiv, {
            // Interaction plugin required to detect dateClick actions, selectable actions, and event drag-n-drop/resizing while
            // timeGrid plugin presents a calendar view with a range of dates (e.g. a week) with each date in that range
            // having its own column. The rows represent the hourly periods within each day column
            plugins: ['interaction', 'timeGrid'],

            header: {
                //left: prev,next buttons to move the date range backwards and forwards one week
                left: 'prev,next today',
                //center: title represents the current week period (e.g Nov 22 - 28, 2020)
                center: 'title',
                //right: 'timeGridWeek, timeGridDay allow you to choose between the default week view, or a single-day view
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
            },

            //defaultDate: '2020-11-22', went for international standard date notation to avoid confusion for different locales
            defaultDate: dayjs().format('YYYY-MM-DD'),

            // can click day/week names to navigate views
            navLinks: true,

            // users can click a timeslot (or click and drag to cover a larger time window) to trigger a callback in which we can add an event
            selectable: true,

            //allows events to be edited - dragged, dropped, resized
            editable: true,

            // allow "more" link when too many events
            eventLimit: true,

            // Determines if events being dragged and resized are allowed to overlap each other.
            // If given a function, the function will be called every time there is a pair of intersecting
            // events, whether upon a user drag or resize. The function must return true if the overlap
            // should be allowed and false otherwise. The below allows overlapping only if both events are all-day
            eventOverlap: function (stillEvent, movingEvent) {
                return stillEvent.allDay && movingEvent.allDay;
            },

            //set to true shows an 'all day' row at the top of the calendar
            allDaySlot: true,

            //set the start time of the calendar
            minTime: '08:00:00',

            //set the end time of the calender
            maxTime: '18:00:00',

            //show a marker for the current day and time
            nowIndicator: true,

            //removes empty space in the calendar
            height: 'auto',

            //function to prepare the Event Source by mapping the API JSON response to a fullcalender Event Object.
            events: function (info, successCallback, failureCallback) {
                $.ajax({
                    // calling the appropriate endpoint
                    // there is an option to specify to only fetch events that match the current view period:
                    // data :{
                    // start: info.start.valueOf(),
                    // end: info.end.valueOf()
                    // }
                    url: `/api/bookings/${sessionStorage.getItem('userId')}/${sessionStorage.getItem('userType')}`,
                    type: 'GET',
                    success: function (res) {
                        let mappedEvents = res.map(function (event) {
                            let title;
                            if (sessionStorage.getItem('userType') === 'student') {
                                title = event.tutor.firstName + ' ' + event.tutor.lastName;
                            } else {
                                title = event.student.firstName + ' ' + event.student.lastName;
                            }
                            let fixedStart = event.startTime.slice(0, -5);
                            let fixedEnd = event.endTime.slice(0, -5);
                            return {
                                id: event.id,
                                title: title,
                                start: fixedStart,
                                end: fixedEnd,
                                extendedProps: {
                                    subject: event.Subject.name,
                                    videoLink: event.videoLink,
                                },
                                description: event.notes,
                            };
                        });
                        successCallback(mappedEvents);
                    },
                    failure: function (err) {
                        alert('there was an error while fetching calendar events');
                        failureCallback(err);
                    },
                    textColor: 'white', // a non-ajax option
                });
            },

            //------------------------------------------------
            // Calendar clicks and interaction
            //------------------------------------------------

            //clicking/clicking & dragging a date/time/period of dates or times fires this
            select: function (info) {
                $('#bookingModal').modal('show');
                let startTime = info.startStr.slice(0, -6);
                let endTime = info.endStr.slice(0, -6);
                $('#bookingStartTime-input').val(startTime);
                $('#bookingEndTime-input').val(endTime);
            },

            //clicking an event fires this
            eventClick: function (info) {
                $('#bookingModal').modal('show');
                let startTimeJSON = JSON.stringify(info.event.start);
                let startTime = startTimeJSON.slice(1, -6);
                let endTimeJSON = JSON.stringify(info.event.end);
                let endTime = endTimeJSON.slice(1, -6);
                $('#bookingStartTime-input').val(startTime);
                $('#bookingEndTime-input').val(endTime);
                $('#bookingTutor-input').val(info.event.title);
                $('#bookingSubject-input').val(info.event.extendedProps.subject);
                $('#bookingNotes-input').val(info.event.extendedProps.description);
                $('#videoLink-input').val(info.event.extendedProps.videoLink);
            },
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
                    url: `/api/bookings/${updatedEvent.id}`,
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
                    url: `/api/bookings/${updatedEvent.id}`,
                    type: 'PUT',
                    data: updatedEvent,
                });
            },
        });
        //------------------------------------------------
        // Rendering the calendar
        //------------------------------------------------

        $(window).on('load', function () {
            calendar.render();
        });
    });
}
